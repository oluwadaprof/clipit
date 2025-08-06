import React from "react"

import { Box, VStack } from "~components/ui/primitives/layout"
import { Heading, Text } from "~components/ui/primitives/text"

const Settings = () => {
  return (
    <VStack className="h-full w-full gap-4">
      <Box className="h-[97%] w-[97%] rounded-[16px] bg-[#1A1A1A] p-4">
        <Text className="text-white">General</Text>
      </Box>
      <Box className="h-[97%] w-[97%] rounded-[16px] bg-[#1A1A1A] p-4">
        <Text className="text-white">Settings</Text>
      </Box>
    </VStack>
  )
}

export default Settings
