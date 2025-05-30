import React, { useEffect, useRef } from "react"
import { createSwapy, type Swapy } from "swapy"

import { useClipStore } from "~/stores/clipStore"
import ClipCard from "~components/clip-card"
import { Box, Grid } from "~components/ui/layout"
import { colors } from "~constants/styles"

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
    <Grid
      ref={containerRef}
      className="w-full grid-cols-2 gap-2 mb-28"
      data-swapy-container>
      {filteredClips.text.map((clip) => (
        <Box
          key={clip.id}
          className={`h-32 w-full rounded-[17px] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}]`}>
          <ClipCard key={clip.id} {...clip} />
        </Box>
      ))}
    </Grid>
  )
}

export default TextClip
