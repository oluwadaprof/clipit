import React, { useEffect, useRef } from "react"
import { createSwapy, type Swapy } from "swapy"

import { useClipStore } from "~/stores/clipStore"
import ClipCard from "~components/clip-card"
import { VStack } from "~components/ui/layout"

const TextClip = () => {
  const { filteredClips, updateClipOrder } = useClipStore()
  const containerRef = useRef<HTMLDivElement>(null)
  const swapyRef = useRef<Swapy | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    if (swapyRef.current) {
      swapyRef.current.destroy()
      swapyRef.current = null
    }

    const swapy = createSwapy(containerRef.current, {
      manualSwap: true,
      animation: "dynamic",
      swapMode: "hover",
      autoScrollOnDrag: true,
      enabled: true,
      dragAxis: "y"
    })

    swapyRef.current = swapy

    swapy.onSwap((event: any) => {
      const { draggingItem, swappedWithItem } = event
      const newOrder = [...filteredClips.text]
      const dragIdx = newOrder.findIndex((item) => item.id === draggingItem)
      const swapIdx = newOrder.findIndex((item) => item.id === swappedWithItem)

      if (dragIdx !== -1 && swapIdx !== -1) {
        ;[newOrder[dragIdx], newOrder[swapIdx]] = [
          newOrder[swapIdx],
          newOrder[dragIdx]
        ]
        updateClipOrder("text", newOrder)
      }
    })

    return () => {
      if (swapyRef.current) {
        swapyRef.current.destroy()
        swapyRef.current = null
      }
    }
  }, [filteredClips.text, updateClipOrder])

  return (
    <VStack ref={containerRef} className="w-full gap-2" data-swapy-container>
      {filteredClips.text.map((clip) => (
        <ClipCard key={clip.id} {...clip} />
      ))}
    </VStack>
  )
}

export default TextClip
