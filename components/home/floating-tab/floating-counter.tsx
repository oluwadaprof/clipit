import React from "react"

import { useClipStore } from "~/stores/clipStore"
import { Box, Flex, HStack } from "~components/ui/primitives/layout"
import { Divider } from "~components/ui/primitives/layout/layout"
import { Button } from "~components/ui/primitives/button"
import { Text } from "~components/ui/primitives/text"
import { borderRadius, colors } from "~constants/styles"

const FloatingCounter = ({
  activeTab,
  onUnselectAll
}: {
  activeTab: "recents" | "text" | "images"
  onUnselectAll: () => void
}) => {
  const { selectedClips, selectAll, clips, filteredClips } = useClipStore()

  const totalClips =
    activeTab === "recents"
      ? clips.length
      : filteredClips[activeTab === "text" ? "text" : "image"].length

  const isAllSelected = selectedClips.size === totalClips

  const handleSelectToggle = () => {
    if (isAllSelected) {
      onUnselectAll()
    } else {
      selectAll(activeTab)
    }
  }

  return (
    <Flex
      className={`flex h-[2.2rem] w-full max-w-[600px] items-center justify-between rounded-[${borderRadius.large}] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}] py-1 pl-3 pr-1`}>
      <Flex className="items-center gap-2">
        <Box
          onClick={handleSelectToggle}
          className={`flex h-3 w-3 cursor-pointer items-center justify-center rounded-full border transition-colors duration-200 ${
            isAllSelected
              ? `border-blue-500 bg-blue-500`
              : `border-[${colors.borderMuted}]`
          }`}
        />
        <Text className={`text-sm text-[${colors.textMuted}]`}>
          {selectedClips.size} selected
        </Text>
      </Flex>
      <Flex className="items-center gap-2">
        <Divider
          orientation="vertical"
          className={`h-full border-l-2 border-[${colors.borderMuted}]`}
        />
        <Button
          variant="ghost"
          onClick={onUnselectAll}
          className={`px-3 text-sm text-[${colors.textMuted}]`}>
          Unselect all
        </Button>
      </Flex>
    </Flex>
  )
}

export default FloatingCounter
