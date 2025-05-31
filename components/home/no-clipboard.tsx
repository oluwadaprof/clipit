import empty from "data-base64:~assets/empty-v2.png"
import React from "react"

import { Center, VStack } from "~components/ui/primitives/layout"
import { Text } from "~components/ui/primitives/text"

const NoClipboard = () => {
  return (
    <Center className="h-full w-full mt-40">
      <VStack className="w-full gap-2">
        <img src={empty} alt="logo" width={100} height={100} />
        <Text className="text-center text-wrap w-40 text-sm text-muted-text">
          No board clipped yet. Start Clipping!!
        </Text>
      </VStack>
    </Center>
  )
}

export default NoClipboard
