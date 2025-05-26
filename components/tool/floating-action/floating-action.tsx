import React from "react"

import { Icons } from "~components/ui/icons/base"
import { Flex } from "~components/ui/layout"
import { borderRadius, colors } from "~constants/styles"

const FloatingAction = ({ onClick }: { onClick: () => void }) => {
  return (
    <Flex
      className={`w-auto justify-end gap-3 rounded-[${borderRadius.large}] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}] p-2`}>
      <Icons.pin
        onClick={onClick}
        size={17}
        className={`${colors.iconMuted} hover:cursor-pointer`}
      />
      <Icons.trash
        onClick={onClick}
        size={17}
        className={`${colors.iconMuted} hover:cursor-pointer`}
      />
    </Flex>
  )
}

export default FloatingAction
