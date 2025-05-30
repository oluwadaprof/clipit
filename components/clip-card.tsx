import React from "react"
import { useClipStore } from "~/stores/clipStore"
import { Icons } from "./ui/icons/base"
import { Box } from "./ui/layout"

interface ClipCardProps {
  id: string
  content: string
  type: "text" | "image"
  isPinned: boolean
  isDraggable?: boolean
}

const ClipCard = ({ id, content, type, isPinned, isDraggable = true }: ClipCardProps) => {
  const { togglePin, toggleSelect, selectedClips } = useClipStore()
  const isSelected = selectedClips.has(id)

  return (
    <Box 
      data-swapy-item={id}
      className={`relative w-full ${isSelected ? 'opacity-70' : ''}`}
      onClick={() => toggleSelect(id)}
    >
      <Box className="flex h-32 w-full items-center justify-center rounded-[16px]">
        {isDraggable && (
          <Box data-swapy-handle className="cursor-grab">
            <Icons.goGrabber size={20} />
          </Box>
        )}
        <Box className="relative h-[93%] w-[88%] rounded-[16px] border bg-white mb-[2px]">
          {type === "text" ? (
            <p className="p-2 text-sm">{content}</p>
          ) : (
            <img 
              src={content} 
              alt="clip" 
              className="h-full w-full object-fill rounded-[12px]" 
            />
          )}
          {isPinned && (
            <Icons.pin
              size={16}
              className="absolute top-2 right-2 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation()
                togglePin(id)
              }}
            />
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default ClipCard