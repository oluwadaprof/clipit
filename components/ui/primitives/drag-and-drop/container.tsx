import { Box } from "~components/ui/layout"
import React, { type ReactNode } from "react"

type ContainerProps = {
  children: ReactNode
  isDraggable: boolean
}

export const DragSwapContainer = ({ children, isDraggable, ...props }: ContainerProps) => {
  return (
    <Box 
      {...props} 
      data-swapy-container
      className="relative w-full"
    >
      {children}
    </Box>
  )
}