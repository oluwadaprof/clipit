import { Box } from "~components/ui/layout"
import React, { type ReactNode } from "react"

type ItemProps = {
  id: string
  children: ReactNode
}

export const DragSwapItem = ({ id, children }: ItemProps) => {
  return (
    <Box
      className="relative item user-select-none h-full"
      data-swapy-item={id}
      data-id={id}
    //   style={{
    //     '&[data-away-dragging]': {
    //       opacity: 0.6
    //     },
    //     '& .swapy-item': {
    //       transition: 'transform 0.3s ease, opacity 0.3s ease'
    //     }
    //   }}
    >
      {children}
    </Box>
  )
}