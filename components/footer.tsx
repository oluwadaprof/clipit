import React from "react"

import { Icons } from "./ui/icons/base"
import { Box, Flex, HStack } from "./ui/layout/layout"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/primitives/avatar"
import { Button } from "./ui/primitives/button"
import { Text } from "./ui/primitives/text"

const Footer = () => {
  return (
    <Flex className="h-12 w-full justify-between border-t border-gray-200 bg-gray-50 p-2">
      <HStack>
        <Box className="flex -space-x-3">
          <Avatar className="border-2 border-white">
            <AvatarImage src="/avatars/01.png" alt="Creator 1" />
            <AvatarFallback className="rounded-full bg-gray-200 text-gray-400">
              C1
            </AvatarFallback>
          </Avatar>
          <Avatar className="border-2 border-white">
            <AvatarImage src="/avatars/02.png" alt="Creator 2" />
            <AvatarFallback className="rounded-full bg-gray-200 text-gray-400">
              C2
            </AvatarFallback>
          </Avatar>
        </Box>
      </HStack>
      <HStack className="gap-1">
        <Icons.warningCircle size={22} className="text-gray-400" />
        <Icons.settings size={22} className="text-gray-400" />
      </HStack>
    </Flex>
  )
}

export default Footer
