import { Avatar, Box, Flex, GridItem, Image, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useDisclosure,Button, VStack, Divider } from '@chakra-ui/react'
import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { CommentLogo, UnlikeLogo } from '../../assets/constants'
import Comment from '../Comment/Comment'

export default function ProfilePost({img}) {
  const {isOpen,onOpen,onClose}=useDisclosure()
  return (
    <>
     <GridItem
 cursor={"pointer"}
 borderRadius={4}
 overflow={"hidden"}
 border={"1px solid"}
 borderColor={"whiteAlpha.300"}
 position={"relative"}
 aspectRatio={1/1}
 onClick={onOpen}
 >
<Flex 
opacity={0}
_hover={{opacity:1}}
position={"absolute"}
alignItems={"center"}
top={0}
left={0}
right={0}
bottom={0}
bg={"blackAlpha.700"}
zIndex={1}
justifyContent={"center"}
transition={"all 0.3s ease"}
>
  <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
<Flex>
<AiFillHeart/>
  <Text fontWeight={"bold"} ml={2}>
7
  </Text>
</Flex>
<Flex>
<FaComment/>
  <Text fontWeight={"bold"} ml={2}>
7
  </Text>
</Flex>
  </Flex>

</Flex>
<Image src={img}  w={"100%"} h={"100%"} objectFit={"cover"}/>
 </GridItem>

  <Modal isOpen={isOpen} onClose={onClose}
  isCentered={true}
  size={{base:"3xl",md:"5xl"}}
  >
        <ModalOverlay />
        <ModalContent>
       
          <ModalCloseButton />
          <ModalBody bg={"black"} pb={5}>
   <Flex gap={4} w={{base:"90%",sm:"70%",md:"full"}} mx={"auto"}>
<Box borderRadius={4} overflow={"hidden"} border={"1px solid"} borderColor={"whiteAlpha.300"} flex={1.5}>
<Image src={img}/>
</Box>

<Flex flex={1} flexDirection={"column"} px={10} display={{base:"none",md:"flex"}}>
  <Flex alignItems={"center"} justifyContent={"space-between"} >


  <Flex alignItems={"center"} gap={4}>
<Image src='profilepic.png' style={{height:"50px" ,width:"50px",borderRadius:"50%"}}/>
<Text fontWeight={"bold"} fontSize={12}>
  Maisson_Ahmed
</Text>
</Flex>
<Box _hover={{bg:"whiteAlpha.300" ,color:"red.600"}} borderRadius={4} p={1}>
    <MdDelete size={20} cursor={"pointer"}/>
    </Box>
    </Flex>
    <hr/>
    <Flex flexDirection={"column"} justifyContent={"space-between"} mt={3} h={"100%"}>

    <VStack alignItems={"start"} gap={2} overflowY={"auto"} maxH={"350px"}>
      
     <Comment img={'/img1.png'} username={"maison_ahmed"}/>
     <Comment img={'/img2.png'} username={"mahmoud_ahmed"}/>
     <Comment img={'/img3.png'} username={"moazz_ahmed"}/>
     <Comment img={'/img3.png'} username={"moazz_ahmed"}/>
     <Comment img={'/img3.png'} username={"moazz_ahmed"}/>
     <Comment img={'/img3.png'} username={"moazz_ahmed"}/>
     <Comment img={'/img3.png'} username={"moazz_ahmed"}/>
     <Comment img={'/img3.png'} username={"moazz_ahmed"}/>
     <Comment img={'/img3.png'} username={"moazz_ahmed"}/>
     <Comment img={'/img3.png'} username={"moazz_ahmed"}/>
     <Comment img={'/img3.png'} username={"moazz_ahmed"}/>
     <Divider my={4} bg={"gray.500"}/>
      </VStack>

    <Flex flexDirection={"column"} gap={3} mb={3}>
      <Flex gap={3}>
        <UnlikeLogo/>
        <CommentLogo/>
      </Flex>
      <Text fontSize={13}>1000 likes</Text>
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
    </Flex>

    </Flex>
</Flex>
   </Flex>
          </ModalBody>

        </ModalContent>
      </Modal> 
    </>

  )
}
