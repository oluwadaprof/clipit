import React from "react"

import { Box, Flex, HStack } from "~components/ui/layout"
import { Button } from "~components/ui/primitives/button"
import { Text } from "~components/ui/primitives/text"
import { borderRadius, colors } from "~constants/styles"

const FloatingCounter = () => {
  return (
    <Flex
      className={`flex h-[2.2rem] w-full max-w-[310px] items-center justify-between rounded-[${borderRadius.large}] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}] pl-3 pr-1 py-1`}>
      <Flex className="items-center gap-2">
        <Box
          className={`h-4 w-4 rounded-full border hover:cursor-pointer hover:bg-[${colors.primary}] border-[${colors.borderMuted}]`}
        />
        <Text className={`text-sm text-[${colors.textMuted}]`}>All</Text>
      </Flex>
      <HStack className="items-center gap-2">
        <Text className={`text-sm text-[${colors.textMuted}]`}>1</Text>
        <Button
          variant="ghost"
          className={`text-sm border-l-2  px-1 border-[${colors.borderMuted}] text-[${colors.textMuted}]`}>
          Done
        </Button>
      </HStack>
    </Flex>
  )
}

export default FloatingCounter
