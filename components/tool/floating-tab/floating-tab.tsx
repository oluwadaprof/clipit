import React from "react"
import { borderRadius, colors } from "~constants/styles"
import { Icons } from "~components/ui/icons/base"
import { Box, Flex, HStack } from "~components/ui/layout"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "~components/ui/primitives/tabs"

import FloatingAction from "../floating-action/floating-action"
import ImagesClip from "./images"
import RecentClip from "./recent"
import TextClip from "./text"

const FloatingTab = () => {
  return (
    <Box className="mt-.5 flex h-[calc(100vh-120px)] w-full flex-col">
      <Tabs defaultValue="recents" className="flex h-full w-full flex-col">
        <HStack className="sticky top-0 z-10 h-12 w-full justify-between bg-white">
          <TabsList className={`rounded-[${borderRadius.large}] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}]`}>
            <TabsTrigger className={`w-[4.9rem] rounded-[${borderRadius.medium}]`} value="recents">
              Recent
            </TabsTrigger>
            <TabsTrigger className={`w-[4.9rem] rounded-[${borderRadius.medium}]`} value="text">
              Text
            </TabsTrigger>
            <TabsTrigger className={`w-[4.9rem] rounded-[${borderRadius.medium}]`} value="images">
              Images
            </TabsTrigger>
          </TabsList>

          {/* Floating action bar */}
          <FloatingAction />
        </HStack>
        <Box className={`flex-1 overflow-y-auto rounded-[${borderRadius.large}]`}>
          <TabsContent value="recents">
            <RecentClip />
          </TabsContent>
          <TabsContent value="text">
            <TextClip />
          </TabsContent>
          <TabsContent value="images">
            <ImagesClip />
          </TabsContent>
        </Box>
      </Tabs>
    </Box>
  )
}

export default FloatingTab
