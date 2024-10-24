

import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function Comment({img,username}) {
  return (
    <Flex alignItems={"center"} gap={3}>
    <Image src={img} style={{height:"50px" ,width:"50px",borderRadius:"50%"}}/>
    <Box>
     <Flex gap={2}>
     <Text fontWeight={"bold"} fontSize={12} mb={0}>
      {username}
     </Text>
     <Text fontSize={13} color={"gray"}>
     So Peatufull
    </Text>
     </Flex>
    
     <Text as={"span"} fontSize={10} color={"gray.500"}>
       10h ago

     </Text>
    </Box>
    </Flex>
  )
}
