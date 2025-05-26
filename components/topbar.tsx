import React, { useState } from 'react'
import { Flex, HStack } from './ui/layout/layout'
import logo from "data-base64:~assets/logo-v2.png"
import { Icons } from './ui/icons/base'
import { Input } from './ui/primitives/input'
import { colors } from '~constants/styles'

const TopBar = ({ onClose }: { onClose: () => void }) => {
  const [showSearch, setShowSearch] = useState(false)

  const toggleSearch = () => {
    setShowSearch(!showSearch)
  }

  return (
    <Flex className={`w-full h-12 border-b p-2 border-${colors.borderMuted} items-center justify-between `}>
      <img src={logo} alt="logo" width={32} height={32} />
      
      <Flex className="flex-1 mx-4">
        {showSearch && (
          <Input 
            className={`w-full bg-transparent placeholder:text-${colors.textMuted} border-none focus-visible:ring-white text-sm
              animate-in fade-in slide-in-from-top-2 duration-200`}
            placeholder="Search..."
            autoFocus
          />
        )}
      </Flex>

      <HStack className="gap-2">
        {showSearch ? (
          <Icons.close 
            onClick={toggleSearch} 
            size={22} 
            className="text-gray-400 hover:cursor-pointer
              animate-in fade-in zoom-in duration-200" 
          />
        ) : (
          <Icons.search 
            onClick={toggleSearch} 
            size={22} 
            className="text-gray-400 hover:cursor-pointer
              animate-in fade-in zoom-in duration-200" 
          />
        )}
        <Icons.sidebar 
          onClick={onClose} 
          size={22} 
          className="text-gray-400 hover:cursor-pointer" 
        />
      </HStack>
    </Flex>
  )
}

export default TopBar
