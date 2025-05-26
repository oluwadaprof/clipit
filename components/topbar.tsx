import React from 'react'
import { Flex, HStack } from './ui/layout/layout'
import logo from "data-base64:~assets/logo-v2.png"
import { Icons } from './ui/icons/base'

const TopBar = () => {
  return (
    <Flex className="w-full h-12 border-b p-2 justify-between border-gray-200">
      <img src={logo} alt="logo" width={32} height={32} />
      <HStack className="gap-2">
        <Icons.search size={22} className="text-gray-400" />
        <Icons.sidebar size={22} className="text-gray-400" />
      </HStack>
    </Flex>
  )
}

export default TopBar
