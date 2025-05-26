import React from "react"

import { Box, Grid, VStack } from "~components/ui/layout"
import { colors } from "~constants/styles"

const RecentClip = () => {
  return (
    <VStack className="w-full gap-2">
      <Grid className="w-full grid-cols-2 gap-2">
        <Box
          className={`h-40 w-full rounded-[10px] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}]`}
        />
        <Box
          className={`h-40 w-full rounded-[10px] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}]`}
        />
      </Grid>
      <Grid className="w-full grid-cols-2 gap-2">
        <Box
          className={`h-40 w-full rounded-[10px] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}]`}
        />
        <Box
          className={`h-40 w-full rounded-[10px] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}]`}
        />
      </Grid>
      <Grid className="w-full grid-cols-2 gap-2">
        <Box
          className={`h-40 w-full rounded-[10px] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}]`}
        />
        <Box
          className={`h-40 w-full rounded-[10px] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}]`}
        />
      </Grid>
    </VStack>
  )
}

export default RecentClip
