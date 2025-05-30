import { AnimatePresence, motion } from "motion/react"
import React, { useState } from "react"

import { Box, HStack } from "~components/ui/layout"
import {
  ActiveTabIndicator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "~components/ui/primitives/tabs"
import { borderRadius, colors } from "~constants/styles"

import FloatingAction from "./floating-action"
import FloatingCounter from "./floating-counter"
import ImagesClip from "./images"
import RecentClip from "./recent"
import TextClip from "./text"

const FloatingTab = () => {
  const [action, setAction] = useState<'pin' | 'delete' | null>(null)
  const [activeTab, setActiveTab] = useState<'recents' | 'text' | 'images'>('recents')

  const handleAction = (actionType: 'pin' | 'delete') => {
    setAction(action === actionType ? null : actionType)
  }

  return (
    <Box className="mt-.5 flex h-[calc(100vh-120px)] w-full flex-col">
      <Tabs
        defaultValue="recents"
        value={activeTab}
        onValueChange={(value: 'recents' | 'text' | 'images') => setActiveTab(value)}
        className="flex h-full w-full flex-col">
        <HStack className="sticky top-0 z-10 h-12 w-full justify-between bg-white">
          <AnimatePresence mode="wait">
            {!action ? (
              <motion.div
                key="tabs"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }}>
                <TabsList
                  className={`rounded-[10px] border border-[${colors.borderMuted}] bg-[#F7F7F7]`}>
                  <ActiveTabIndicator value={activeTab} />
                  <TabsTrigger
                    className={`w-[4.9rem] rounded-[${borderRadius.medium}] data-[state=active]:text-white`}
                    value="recents">
                    Recent
                  </TabsTrigger>
                  <TabsTrigger
                    className={`w-[4.9rem] rounded-[${borderRadius.medium}] data-[state=active]:text-white`}
                    value="text">
                    Text
                  </TabsTrigger>
                  <TabsTrigger
                    className={`w-[4.9rem] rounded-[${borderRadius.medium}]`}
                    value="images">
                    Images
                  </TabsTrigger>
                </TabsList>
              </motion.div>
            ) : (
              <motion.div
                key="counter"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }}
                className="w-[18.7rem]">
                <FloatingCounter activeAction={action} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating action bar */}
          <FloatingAction 
            onClick={handleAction} 
            activeTab={activeTab} 
          />
        </HStack>
        <Box
          className={`flex-1 overflow-auto `}>
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
