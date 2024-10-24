import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants'


const PostFooter = ({username}) => {
  const [liked,setLiked]=useState(false)
  const [likes,setLikes]=useState(1000)
  const handleLike=()=>{
    if(liked){
      setLiked(false)
      setLikes(liked-1)
    }else{
      setLiked(true)
      setLikes(liked+1)
    }
  }
  return (
    <>
    <Box mb={10}>
    <Flex alignItems={"center"} gap={4}  w={"full"} pt={0} mb={2} mt={"4"}>
      <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
       {
        !liked?<NotificationsLogo/>:<UnlikeLogo/>
       }
      </Box>
      <Box cursor={"pointer"} fontSize={17}><CommentLogo/></Box>
     </Flex>
    {
      likes !=0 ?(  <Text  fontWeight={600} fontSize={"sm"}>
        {likes} likes
      </Text>):null
    }
  
 
     <Text fontSize={"sm"} fontWeight={700}>
     {username} {" "}
      <Text as="span" fontWeight={400}>
           feeling good
      </Text>
    </Text>
    <Text fontSize="sm" color={"gray"}>
      View all 1,000 comments
    </Text> 
    <Flex alignItems={"center"} gap={2} justifyContent={"space-between"}  w={"full"}>
<InputGroup>
<Input variant={"flushed"} placeholder={"Add a comment...."}/>
<InputRightElement>
<Button fontSize={14} color={"blue.500"} fontWeight={600} cursor={"pointer"}
_hover={{color:"white"}}
bg={"transparent"}
>
  Post
</Button>
</InputRightElement>
</InputGroup>
    </Flex>
    </Box>

    </>
 
  )
}

export default PostFooter
