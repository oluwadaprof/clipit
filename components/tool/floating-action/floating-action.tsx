import React from "react"

import { Icons } from "~components/ui/icons/base"
import { Flex } from "~components/ui/layout"
import { colors } from "~constants/styles"

const FloatingAction = () => {
  return (
    <Flex className="w-auto justify-end gap-3 rounded-[10px] border border-[#E8E8E8] bg-[#F7F7F7] p-2">
      <Icons.pin size={17} className={`${colors.iconMuted}`} />
      <Icons.trash size={17} className={`${colors.iconMuted}`} />
    </Flex>
  )
}

export default FloatingAction
