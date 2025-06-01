import israelAvatar from "data-base64:~assets/israel.png"
import tosinAvatar from "data-base64:~assets/tosin.png"
import React, { useState } from "react"

import { Icons } from "./ui/icons/base"
import { Box, Flex, HStack } from "./ui/primitives/layout/layout"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/primitives/avatar"
import { useNavigationStore } from "~/stores/navigationStore"

const Footer = () => {
  const [hoveredAvatar, setHoveredAvatar] = useState<"tosin" | "israel" | null>(
    null
  )
  const setView = useNavigationStore(state => state.setView)

  return (
    <Flex className="h-12 w-full justify-between border-t border-gray-200 bg-gray-50 p-2">
      <HStack>
        <Box className="flex">
          <Avatar
            className={`transition-all delay-75 hover:cursor-pointer ${
              hoveredAvatar === "israel"
                ? "blur-[1px]"
                : hoveredAvatar === "tosin"
                ? "z-10"
                : ""
            }`}
            onMouseEnter={() => setHoveredAvatar("tosin")}
            onMouseLeave={() => setHoveredAvatar(null)}>
            <AvatarImage src={tosinAvatar} alt="Tosin" />
            <AvatarFallback className="rounded-full bg-gray-200 text-gray-400">
              T
            </AvatarFallback>
          </Avatar>
          <Avatar
            className={`-ml-3 transition-all delay-75 hover:cursor-pointer ${
              hoveredAvatar === "israel"
                ? "z-10 translate-x-[14px]"
                : hoveredAvatar === "tosin"
                ? "blur-[1px] translate-x-[14px]"
                : ""
            }`}
            onMouseEnter={() => setHoveredAvatar("israel")}
            onMouseLeave={() => setHoveredAvatar(null)}>
            <AvatarImage src={israelAvatar} alt="Israel" />
            <AvatarFallback className="rounded-full bg-gray-200 text-gray-400">
              I
            </AvatarFallback>
          </Avatar>
        </Box>
      </HStack>
      <HStack className="gap-1">
        <Icons.warningCircle 
          size={22} 
          onClick={() => setView('info')}
          className="text-gray-400 hover:cursor-pointer hover:text-blue-500" 
        />
        <Icons.settings 
          size={22} 
          onClick={() => setView('settings')}
          className="text-gray-400 hover:cursor-pointer hover:text-blue-500" 
        />
      </HStack>
    </Flex>
  )
}

export default Footer
