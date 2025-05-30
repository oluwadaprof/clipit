import React from "react"
import { useClipStore } from "~/stores/clipStore"
import { Box, Flex, HStack } from "~components/ui/layout"
import { Button } from "~components/ui/primitives/button"
import { Text } from "~components/ui/primitives/text"
import { borderRadius, colors } from "~constants/styles"

const FloatingCounter = ({ activeAction }: { activeAction: 'pin' | 'delete' | null }) => {
  const { clips, selectedClips } = useClipStore()

  const getCount = () => {
    if (activeAction === 'pin') {
      return clips.filter(clip => clip.isPinned).length
    }
    if (activeAction === 'delete') {
      return selectedClips.size
    }
    return 0
  }

  const getLabel = () => {
    if (activeAction === 'pin') return 'Pin'
    if (activeAction === 'delete') return 'Delete'
    return 'All'
  }

  return (
    <Flex
      className={`flex h-[2.2rem] w-full max-w-[600px] items-center justify-between rounded-[${borderRadius.large}] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}] pl-3 pr-1 py-1`}>
      <Flex className="items-center gap-2">
        <Box
          className={`h-3 w-3 rounded-full border hover:cursor-pointer hover:bg-[${colors.primary}] border-[${colors.borderMuted}]`}
        />
        <Text className={`text-sm text-[${colors.textMuted}]`}>{getLabel()}</Text>
      </Flex>
      <HStack className="items-center gap-2">
        <Text className={`text-sm text-[${colors.textMuted}]`}>{getCount()}</Text>
        <Button
          variant="ghost"
          className={`text-sm border-l-2 px-1 border-[${colors.borderMuted}] text-[${colors.textMuted}]`}>
          Done
        </Button>
      </HStack>
    </Flex>
  )
}

export default FloatingCounter
