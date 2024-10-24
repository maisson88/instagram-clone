
import { Box, Grid, Skeleton, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ProfilePost from './ProfilePost'

export default function ProfilePosts() {
  const [isLoading,setisLoading]=useState(true)

  useEffect(()=>{
    setTimeout(()=>{
setisLoading(false)
    },3000)
  },[])
  return (
    <Grid
    templateColumns={
     { sm:"repeat(1,1fr)",
      md:"repeat(3,1fr)",
     }
    }
    gap={1}
    columnGap={1}
    >
{
  isLoading && [0,1,2,3,4,5].map((_,idx)=>(
    <VStack key={idx} alignItems={"flex-start"} gap={4}>
      <Skeleton  w={'full'}>
        <Box h="300px">
    content wraped
        </Box>
      </Skeleton>

    </VStack>
  ))
}
{
  !isLoading && (
    <>
    <ProfilePost img='/img1.png'/>
    <ProfilePost img='/img2.png'/>
    <ProfilePost img='/img3.png'/>
    <ProfilePost img='/img4.png'/>
    </>
  )
}
    </Grid>
  )
}
