import React from 'react'
import { Box } from '~components/ui/primitives/layout'
import { Heading, Text } from '~components/ui/primitives/text'

const InfoPanel = () => {
  return (
    <Box className="flex h-full w-full flex-col items-center justify-center">
      <Box className="h-[97%] w-[97%] rounded-[16px] bg-[#1A1A1A] p-4">
        <Text className="text-white">
          Ever had that moment when you copied something important, only to lose
          it forever with your next copy? Say goodbye to clipboard anxiety!
          <br />
          <br />
          Clipit is your friendly neighborhood clipboard manager that
          automatically captures everything you copy while you browse. Text
          snippets, images, links, we've got you covered.
        </Text>
        <Heading as="h4" className="text-white">
          <br />
          <br />
          How does it work?
        </Heading>
        <Text>
          It's ridiculously simple! Click our icon to activate, and Clipit
          quietly saves everything you copy. Need something back? Just click to
          reclaim it. Want to keep it forever? Pin it! Too much clutter? Set a
          cleanup timer!
        </Text>

        <Text className="mt-6">
          <br />
          <br />
          Built with you in mind 💝
        </Text>
      </Box>
    </Box>
  )
}

export default InfoPanel 