import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function SuggestsUser() {
    const [followed ,setIsFollowed]=useState(false)
  return (
  <>
  <Flex w={"full"} alignItems={"center"} justifyContent={"space-between"} mb={4}>

    <Flex alignItems={"center"} gap={2}>
<Avatar src='/img1.png'/>
<Box>
    <Text fontSize={12} fontWeight={"bold"}>
        Mohamoud Ahmed
    </Text>
    <Text color={"gray.500"} fontSize={11}>
        1345 followers
    </Text>
</Box>
    </Flex>
{
    followed?(<Text onClick={()=>setIsFollowed(!followed)} _hover={{color:"blue.400"}} fontWeight={"semibold"} fontSize={13}   cursor={"pointer"}>Unfollow</Text>):(<Text onClick={()=>setIsFollowed(!followed)} fontWeight={"semibold"} fontSize={13} _hover={{color:"white"}} color={"blue.400"} cursor={"pointer"}>Follow</Text>)
}

  </Flex>
  </>
  )
}
