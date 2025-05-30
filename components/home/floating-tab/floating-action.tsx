import { motion } from "motion/react"
import React from "react"

import { useClipStore } from "~/stores/clipStore"
import { Icons } from "~components/ui/icons/base"
import { Flex } from "~components/ui/layout"
import { colors } from "~constants/styles"

const FloatingAction = ({
  onClick,
  activeTab
}: {
  onClick: (action: "pin" | "delete") => void
  activeTab: "recents" | "text" | "images"
}) => {
  const { togglePin, removeClip, selectedClips, filteredClips } = useClipStore()
  const [activeAction, setActiveAction] = React.useState<
    "pin" | "delete" | null
  >(null)

  const handleActionClick = (action: "pin" | "delete") => {
    if (activeAction === action) {
      // Execute the action on selected items based on current tab
      if (action === "pin") {
        togglePin("selected")
      } else if (action === "delete") {
        // Use the appropriate clip list based on active tab
        const clipsToDelete =
          activeTab === "recents" ? "selected" : `selected_${activeTab}` // 'selected_text' or 'selected_images'
        removeClip(clipsToDelete)
      }
      setActiveAction(null)
    } else {
      setActiveAction(action)
    }
    onClick(action)
  }

  const indicatorPositions = {
    pin: 0,
    delete: 28
  }

  return (
    <Flex
      className={`relative w-auto justify-end gap-3 rounded-[10px] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}] p-2`}>
      {activeAction && (
        <motion.div
          className="absolute left-[4px] top-[3px] h-[27px] w-[27px] rounded-[8px] bg-blue-500"
          initial={false}
          animate={{
            x: indicatorPositions[activeAction]
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
        />
      )}

      <Icons.pin
        onClick={() => handleActionClick("pin")}
        size={17}
        className={`relative z-10 ${
          activeAction === "pin" ? "text-white" : colors.iconMuted
        } transition-colors hover:cursor-pointer`}
      />

      <Icons.trash
        onClick={() => handleActionClick("delete")}
        size={17}
        className={`relative z-10 ${
          activeAction === "delete" ? "text-white" : colors.iconMuted
        } transition-colors hover:cursor-pointer`}
      />
    </Flex>
  )
}

export default FloatingAction
