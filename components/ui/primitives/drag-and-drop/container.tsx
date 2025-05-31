import { Box } from "~components/ui/primitives/layout"
import React, { type ReactNode } from "react"

type ContainerProps = {
  children: ReactNode
  isDraggable: boolean
  ref?: React.RefObject<HTMLDivElement>
}

export const DragSwapContainer = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, isDraggable, ...props }, ref) => {
    return (
      <Box 
        {...props} 
        ref={ref}
        data-swapy-container
        className="relative w-full"
      >
        {children}
      </Box>
    )
  }
)