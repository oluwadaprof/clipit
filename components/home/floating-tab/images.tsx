import React from "react"

import ClipCard from "~components/clip-card"
import { Box, Grid, VStack } from "~components/ui/layout"
import { colors } from "~constants/styles"

const ImagesClip = () => {
  return (
    <VStack className="w-full gap-2">
      <Grid className="w-full grid-cols-2 gap-2">
        <Box
          className={`h-32 w-full rounded-[17px] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}]`}>
          <ClipCard id="1" content="https://picsum.photos/200/300" type="image" isPinned={false} />
        </Box>
        <Box
          className={`h-32 w-full rounded-[17px] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}]`}>
          <ClipCard id="2" content="https://picsum.photos/200/300" type="image" isPinned={false} />
        </Box>
      </Grid>
      <Grid className="w-full grid-cols-2 gap-2">
        <Box
          className={`h-32 w-full rounded-[17px] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}]`}>
          <ClipCard id="3" content="https://picsum.photos/200/300" type="image" isPinned={false} />
        </Box>
        <Box
          className={`h-32 w-full rounded-[17px] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}]`}>
          <ClipCard id="4" content="https://picsum.photos/200/300" type="image" isPinned={false} />
        </Box>
      </Grid>
      <Grid className="w-full grid-cols-2 gap-2">
        <Box
          className={`h-32 w-full rounded-[17px] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}]`}>
          <ClipCard id="5" content="https://picsum.photos/200/300" type="image" isPinned={false} />
        </Box>
        <Box
          className={`h-32 w-full rounded-[17px] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}]`}>
          <ClipCard id="6" content="https://picsum.photos/200/300" type="image" isPinned={false} />
        </Box>
      </Grid>
      <Grid className="w-full grid-cols-2 gap-2">
        <Box
          className={`h-32 w-full rounded-[17px] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}]`}>
          <ClipCard id="7" content="https://picsum.photos/200/300" type="image" isPinned={false} />
        </Box>
        <Box
          className={`h-32 w-full rounded-[17px] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}]`}>
          <ClipCard id="8" content="https://picsum.photos/200/300" type="image" isPinned={false} />
        </Box>
      </Grid>
    </VStack>
  )
}

export default ImagesClip
