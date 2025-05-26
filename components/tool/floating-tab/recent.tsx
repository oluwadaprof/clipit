import React from "react"

import ClipCard from "~components/clip-card"
import { Box, Grid, VStack } from "~components/ui/layout"
import { colors } from "~constants/styles"

const RecentClip = () => {
  return (
    <VStack className="w-full gap-2">
      <Grid className="w-full grid-cols-2 gap-2">
        <Box
          className={`h-32 w-full rounded-[17px] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}]`}>
          <ClipCard />
        </Box>
        <Box
          className={`h-32 w-full rounded-[17px] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}]`}>
          <ClipCard />
        </Box>
      </Grid>
      <Grid className="w-full grid-cols-2 gap-2">
        <Box
          className={`h-32 w-full rounded-[17px] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}]`}>
          <ClipCard />
        </Box>
        <Box
          className={`h-32 w-full rounded-[17px] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}]`}>
          <ClipCard />
        </Box>
      </Grid>
      <Grid className="w-full grid-cols-2 gap-2">
        <Box
          className={`h-32 w-full rounded-[17px] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}]`}>
          <ClipCard />
        </Box>
        <Box
          className={`h-32 w-full rounded-[17px] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}]`}>
          <ClipCard />
        </Box>
      </Grid>
      <Grid className="w-full grid-cols-2 gap-2">
        <Box
          className={`h-32 w-full rounded-[17px] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}]`}>
          <ClipCard />
        </Box>
        <Box
          className={`h-32 w-full rounded-[17px] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}]`}>
          <ClipCard />
        </Box>
      </Grid>
    </VStack>
  )
}

export default RecentClip
