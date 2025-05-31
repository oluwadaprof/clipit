import { motion } from "motion/react"
import React from "react"

import { useClipStore } from "~/stores/clipStore"
import { Icons } from "~components/ui/icons/base"
import { Flex } from "~components/ui/primitives/layout"
import { colors } from "~constants/styles"

const FloatingAction = ({
  activeTab
}: {
  activeTab: "recents" | "text" | "images"
}) => {
  const { togglePin, removeClip } = useClipStore()

  const handlePin = () => {
    togglePin("selected")
  }

  const handleDelete = () => {
    const clipsToDelete = activeTab === "recents" ? "selected" : `selected_${activeTab}`
    removeClip(clipsToDelete)
  }

  return (
    <Flex
      className={`relative w-auto justify-end gap-3 rounded-[10px] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}] p-2`}>
      <Icons.pin
        onClick={handlePin}
        size={17}
        className={`relative z-10 ${colors.iconMuted} transition-colors hover:cursor-pointer hover:text-blue-500`}
      />
      <Icons.trash
        onClick={handleDelete}
        size={17}
        className={`relative z-10 ${colors.iconMuted} transition-colors hover:cursor-pointer hover:text-red-500`}
      />
    </Flex>
  )
}

export default FloatingAction
