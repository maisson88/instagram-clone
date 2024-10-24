
import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { BsGrid3X3 } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
export default function ProfileTaps() {
    const [tap,setTap]=useState("posts")
  return (
   <Flex fontSize={13} maxW={"full"} justifyContent={"center"} alignItems={"center"} gap={{base:4,sm:10}} mb={4} >
<Flex cursor={"pointer"} alignItems={"center"} gap={1} paddingTop={2} onClick={()=>setTap("posts")} borderTop={tap === "posts" ? "1px solid" : "none"}>
  <Box fontSize={20}><BsGrid3X3 /></Box>
  <Text display={{base:'none',sm:"block"}}>POSTS</Text> </Flex>
<Flex cursor={"pointer"} alignItems={"center"} gap={1} paddingTop={2}  borderTop={tap === "saved" ? "1px solid" : "none"} onClick={()=>setTap("saved")}> <Box fontSize={20} ><BsBookmark  fontWeight={"bold"} /></Box><Text display={{base:"none",sm:"block"}}>SAVED</Text> </Flex>
<Flex cursor={"pointer"} alignItems={"center"} gap={1} paddingTop={2} borderTop={tap === "likes" ? "1px solid" : "none"} onClick={()=>setTap("likes")}> <Box fontSize={20}><BsSuitHeart fontWeight={"bold"}/></Box><Text display={{base:"none",sm:"block"}}> LIKES</Text></Flex>

   </Flex>
  )
}
 