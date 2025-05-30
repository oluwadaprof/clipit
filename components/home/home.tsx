import React from 'react'
import { Box } from '~components/ui/layout'
import NoClipboard from './no-clipboard'
import FloatingTab from '~components/home/floating-tab/floating-tab'

const Home = () => {
  return (
    <Box>
      <FloatingTab />   
      {/* <NoClipboard /> */}
    </Box>
  )
}

export default Home
