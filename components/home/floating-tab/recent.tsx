import React, { useEffect, useState } from "react"
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
  MouseSensor,
  TouchSensor,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from '@dnd-kit/sortable'
import {
  restrictToWindowEdges,
} from '@dnd-kit/modifiers'

import ClipCardContainer from "~components/clip-card"
import { Box, Grid } from "~components/ui/primitives/layout"
import { colors } from "~constants/styles"
import { useClipStore } from "~stores/clipStore"
import type { ClipCard } from '~/stores/schemas'

const RecentClip = ({ activeAction }: { activeAction: 'pin' | 'delete' | null }) => {
  const { clips, updateClipOrder, removeClip, selectedClips } = useClipStore()
  
  // Local state for drag and drop
  const [items, setItems] = useState<ClipCard[]>(clips)
  const [activeId, setActiveId] = useState<string | null>(null)
  
  // More sensitive sensors for better drag detection
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 3, // Reduced distance for more responsive dragging
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )
  
  // Update local state when store changes
  useEffect(() => {
    setItems(clips)
  }, [clips])

  // Handle active actions (pin/delete)
  useEffect(() => {
    if (!activeAction) return

    if (activeAction === 'delete') {
      // Remove selected clips
      const selectedIds = Array.from(selectedClips)
      selectedIds.forEach(id => removeClip(id))
    }
  }, [activeAction, selectedClips, removeClip])

  const handleDragStart = (event: DragStartEvent) => {
    console.log('Drag start:', event.active.id)
    setActiveId(event.active.id as string)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    
    console.log('Drag end:', { active: active.id, over: over?.id })
    setActiveId(null)

    if (!over || active.id === over.id) {
      return
    }

    setItems((prevItems) => {
      const oldIndex = prevItems.findIndex(item => item.id === active.id)
      const newIndex = prevItems.findIndex(item => item.id === over.id)
      
      console.log('Moving from', oldIndex, 'to', newIndex)
      
      if (oldIndex === -1 || newIndex === -1) {
        return prevItems
      }
      
      const newItems = arrayMove(prevItems, oldIndex, newIndex)
      
      // Update the store with new order
      updateClipOrder("recent", newItems)
      
      return newItems
    })
  }

  const handleDragCancel = () => {
    console.log('Drag cancelled')
    setActiveId(null)
  }

  // Find the active item for drag overlay
  const activeItem = activeId ? items.find(item => item.id === activeId) : null

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
      modifiers={[restrictToWindowEdges]}
    >
      <SortableContext 
        items={items.map(item => item.id)} 
        strategy={rectSortingStrategy}
      >
        <Grid
          className="mb-28 w-full grid-cols-2 gap-2"
        >
          {items.map((item) => (
            <Box
              key={item.id}
              className={`h-32 w-full rounded-[17px] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}]`}
            >
              <ClipCardContainer {...item} />
            </Box>
          ))}
        </Grid>
      </SortableContext>

      {/* Drag Overlay */}
      <DragOverlay dropAnimation={null}>
        {activeItem ? (
          <Box
            className={`h-32 w-full rounded-[17px] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}] shadow-2xl rotate-3 scale-105`}
          >
            <ClipCardContainer {...activeItem} isDraggable={false} />
          </Box>
        ) : null}
      </DragOverlay>
    </DndContext>
  )
}

export default RecentClip