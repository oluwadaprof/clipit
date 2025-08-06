import type { SlotItemMapArray, Swapy } from 'swapy'
import type { ClipCard } from '~/stores/schemas'
import { createSwapy } from 'swapy'
import React from 'react'

// Types
export type SlottedClips = Array<{
  slotId: string
  itemId: string
  item: ClipCard | null
}>

// Convert clips to slotted items format
export const toSlottedClips = (
  clips: ClipCard[],
  slotItemMap: SlotItemMapArray
): SlottedClips => {
  return slotItemMap.map((slotItem) => ({
    slotId: slotItem.slot,
    itemId: slotItem.item,
    item: slotItem.item === '' ? null : (clips.find((clip) => clip.id === slotItem.item) ?? null)
  }))
}

// Initialize slot item map from clips
export const initSlotItemMap = (clips: ClipCard[]): SlotItemMapArray => {
  return clips.map((clip) => ({
    item: clip.id,
    slot: clip.id
  }))
}

// Dynamic update of swapy items
export const dynamicSwapyUpdate = (
  swapy: Swapy | null,
  clips: ClipCard[],
  slotItemMap: SlotItemMapArray,
  setSlotItemMap: (slotItemMap: SlotItemMapArray) => void,
  removeItemOnly = false
) => {
  // Find new clips that aren't in the slot map
  const newItems: SlotItemMapArray = clips
    .filter((clip) => !slotItemMap.some((slotItem) => slotItem.item === clip.id))
    .map((clip) => ({
      slot: clip.id,
      item: clip.id
    }))

  // Handle existing items
  let withoutRemovedItems: SlotItemMapArray
  if (!removeItemOnly) {
    // Filter out items that no longer exist in clips
    withoutRemovedItems = slotItemMap.filter(
      (slotItem) => clips.some((clip) => clip.id === slotItem.item) || !slotItem.item
    )
  } else {
    // Keep slots but clear items that no longer exist
    withoutRemovedItems = slotItemMap.map((slotItem) => {
      if (!clips.some((clip) => clip.id === slotItem.item)) {
        return { slot: slotItem.slot, item: '' }
      }
      return slotItem
    })
  }

  // Combine existing and new items
  const updatedSlotItemsMap: SlotItemMapArray = [...withoutRemovedItems, ...newItems]
  setSlotItemMap(updatedSlotItemsMap)

  // Update swapy if there are changes
  if (newItems.length > 0 || withoutRemovedItems.length !== slotItemMap.length) {
    requestAnimationFrame(() => {
      swapy?.update()
    })
  }
}

// Hook to manage swapy state
export const useSwapyManager = (
  clips: ClipCard[],
  updateClipOrder: (type: 'text' | 'image' | 'recent', newOrder: ClipCard[]) => void,
  clipType: 'text' | 'image' | 'recent'
) => {
  const [slotItemMap, setSlotItemMap] = React.useState<SlotItemMapArray>(() => 
    initSlotItemMap(clips)
  )
  const swapyRef = React.useRef<Swapy | null>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!containerRef.current || clips.length === 0) return

    if (swapyRef.current) {
      swapyRef.current.destroy()
      swapyRef.current = null
    }

    const timer = setTimeout(() => {
      if (!containerRef.current) return

      const swapy = createSwapy(containerRef.current, {
        manualSwap: false,
        animation: "dynamic",
        swapMode: "hover",
        autoScrollOnDrag: true,
        enabled: true,
        dragAxis: clipType === 'text' ? 'y' : 'both',
      })

      swapyRef.current = swapy

      swapy.onSwap((event: any) => {
        const { draggingItem, swappedWithItem } = event
        const newOrder = [...clips]
        const dragIdx = newOrder.findIndex((item) => item.id === draggingItem)
        const swapIdx = newOrder.findIndex((item) => item.id === swappedWithItem)

        if (dragIdx !== -1 && swapIdx !== -1) {
          [newOrder[dragIdx], newOrder[swapIdx]] = [
            newOrder[swapIdx],
            newOrder[dragIdx]
          ]
          updateClipOrder(clipType, newOrder)
        }
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      if (swapyRef.current) {
        swapyRef.current.destroy()
        swapyRef.current = null
      }
    }
  }, [clips, updateClipOrder, clipType])

  // Update slot items when clips change
  React.useEffect(() => {
    dynamicSwapyUpdate(swapyRef.current, clips, slotItemMap, setSlotItemMap)
  }, [clips])

  return {
    containerRef,
    slotItemMap,
    slottedClips: toSlottedClips(clips, slotItemMap)
  }
} 