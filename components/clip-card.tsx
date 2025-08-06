import React from "react"
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import { useClipStore } from "~/stores/clipStore"
import { Icons } from "./ui/icons/base"
import { Box } from "./ui/primitives/layout"

interface ClipCardProps {
  id: string
  content: string
  type: "text" | "image"
  isPinned: boolean
  isDraggable?: boolean
}

const ClipCardContainer = ({
  id,
  content,
  type,
  isPinned,
  isDraggable = true
}: ClipCardProps) => {
  const { toggleSelect, selectedClips } = useClipStore()
  const isSelected = selectedClips.has(id)

  // dnd-kit sortable hook
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
    disabled: !isDraggable,
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 1000 : 'auto',
  }

  const getBorderStyle = () => {
    if (!isSelected) return "border-transparent"
    return "border-yellow-500"
  }

  useEffect(() => {
    console.log('ClipCardContainer rendered for:', id, { isDragging, transform });
  }, [id, isDragging, transform]);

  const handleClick = (e: React.MouseEvent) => {
    // Prevent click when dragging
    if (isDragging || e.defaultPrevented) return
    toggleSelect(id)
  }

  return (
    <Box 
      ref={setNodeRef}
      style={style}
      className={`relative h-full w-full ${isDragging ? 'opacity-50 scale-105' : ''}`} 
      onClick={handleClick}
    >
      <Box
        className={`flex h-full w-full items-center justify-center rounded-[16px] border-2 transition-colors duration-300 hover:cursor-pointer hover:border-2 hover:border-blue-500 ${getBorderStyle()} ${isSelected ? "opacity-70" : ""}`}
      >
        {isDraggable && (
          <Box
            {...attributes}
            {...listeners}
            className="z-10 cursor-grab active:cursor-grabbing touch-none"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <Icons.goGrabber size={16} />
          </Box>
        )}
        <Box className="relative mb-[2px] h-[93%] w-[88%] rounded-[16px] border bg-white">
          {type === "text" ? (
            <p className="overflow-hidden p-2 text-sm text-black">{content}</p>
          ) : (
            <img
              src={content}
              alt="clip"
              className="h-full w-full rounded-[12px] object-cover"
              draggable={false}
            />
          )}
          {isPinned && (
            <Icons.pin
              size={16}
              className="absolute right-2 top-2 text-blue-500"
            />
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default ClipCardContainer