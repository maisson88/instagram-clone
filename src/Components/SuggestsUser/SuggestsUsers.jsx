import { Flex, Text, VStack ,Box, color} from '@chakra-ui/react'
import React from 'react'
import SuggestHeader from './SuggestHeader'
import SuggestsUser from './SuggestsUser'
import { Link } from 'react-router-dom'

export default function SuggestsUsers() {
  return (
    <>
   <VStack py={8} px={6} gap={4}>
    <SuggestHeader/>
    <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
<Text fontWeight={"bold"} fontSize={12} color={"gray.500"}>
    Suggethed for you
</Text>
<Text fontSize={12} fontWeight={"bold"} _hover={{color:"blue.400"}} cursor={"pointer"}>
    See All
</Text>
    </Flex>
    <SuggestsUser/>
   <SuggestsUser/>
   <SuggestsUser/>
    <Box fontSize={12} color={"gray.400"} alignSelf={"start"}>
   
   
          © 2024 Built By {' '}
           
            <Link state={{color:"blue"}} fontSize={14} > As a program</Link>
        
          
        </Box>
   </VStack>
 
 
   </>
  )
}
