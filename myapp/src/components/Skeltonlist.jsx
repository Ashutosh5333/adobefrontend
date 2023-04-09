import React from 'react'
import { Box } from '@chakra-ui/react'
import {  SkeletonCircle, SkeletonText } from '@chakra-ui/react'


const Skeltonlist = () => {


  return (
    <>
     <Box >

     <Box padding='8' boxShadow='lg' bg='white' width="90vw" margin="auto">
      <SkeletonCircle size='16' />
      <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='8' />
    </Box>
    <Box padding='8' boxShadow='lg' bg='white' width="90vw" margin="auto">
      <SkeletonCircle size='16' />
      <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='8' />
    </Box>
    <Box padding='8' boxShadow='lg' bg='white' width="90vw" margin="auto">
      <SkeletonCircle size='16' />
      <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='8' />
    </Box>
    <Box padding='8' boxShadow='lg' bg='white' width="90vw" margin="auto">
      <SkeletonCircle size='16' />
      <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='8' />
    </Box>
    <Box padding='8' boxShadow='lg' bg='white' width="90vw" margin="auto">
      <SkeletonCircle size='16' />
      <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='8' />
    </Box>
    <Box padding='8' boxShadow='lg' bg='white' width="90vw" margin="auto">
      <SkeletonCircle size='16' />
      <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='8' />
    </Box>
    <Box padding='8' boxShadow='lg' bg='white' width="90vw" margin="auto">
      <SkeletonCircle size='16' />
      <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='8' />
    </Box>
      
     </Box>
    </>
  )
}

export default Skeltonlist