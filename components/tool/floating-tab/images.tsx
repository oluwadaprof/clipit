import React from 'react'
import { Box, Grid, VStack } from '~components/ui/layout'

const ImagesClip = () => {
  return (
   <VStack className="w-full gap-2">
     <Grid className="w-full gap-2 grid-cols-2">
      <Box className="w-full h-40 rounded-[10px] border border-[#E8E8E8] bg-[#F7F7F7]"/>
      <Box className="w-full h-40 rounded-[10px] border border-[#E8E8E8] bg-[#F7F7F7]"/>
    </Grid>
    <Grid className="w-full gap-2 grid-cols-2">
      <Box className="w-full h-40 rounded-[10px] border border-[#E8E8E8] bg-[#F7F7F7]"/>
      <Box className="w-full h-40 rounded-[10px] border border-[#E8E8E8] bg-[#F7F7F7]"/>
    </Grid> 
    <Grid className="w-full gap-2 grid-cols-2"> 
        <Box className="w-full h-40 rounded-[10px] border border-[#E8E8E8] bg-[#F7F7F7]"/>
        <Box className="w-full h-40 rounded-[10px] border border-[#E8E8E8] bg-[#F7F7F7]"/>
    </Grid>
   </VStack>
  )
}

export default ImagesClip
