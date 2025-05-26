import React from 'react'
import { Box, Grid, VStack } from '~components/ui/layout'
import { borderRadius, colors } from '~constants/styles'

const TextClip = () => {
  return (
   <VStack className="w-full gap-2">
     <Grid className="w-full gap-2 grid-cols-2">
      <Box className={`w-full h-40 rounded-[${borderRadius.large}] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}]`}/>
      <Box className={`w-full h-40 rounded-[${borderRadius.large}] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}]`}/>
    </Grid>
    <Grid className="w-full gap-2 grid-cols-2">
      <Box className={`w-full h-40 rounded-[${borderRadius.large}] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}]`}/>
      <Box className={`w-full h-40 rounded-[${borderRadius.large}] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}]`}/>
    </Grid> 
    <Grid className="w-full gap-2 grid-cols-2"> 
        <Box className={`w-full h-40 rounded-[${borderRadius.large}] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}]`}/>
        <Box className={`w-full h-40 rounded-[${borderRadius.large}] border border-[${colors.borderMuted}] bg-[${colors.backgroundMuted}]`}/>
    </Grid>
   </VStack>
  )
}

export default TextClip
