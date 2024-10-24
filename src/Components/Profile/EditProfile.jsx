
import React, { useRef, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    
  } from '@chakra-ui/react'
  import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
  } from '@chakra-ui/react'
  import { SmallCloseIcon } from '@chakra-ui/icons'
import useAuthStore from '../../store/AuthStore'

import usePreviewImg from '../../hooks/usePreviewImg'
import useEditProfile from '../../hooks/useEditProfile'
import useShowToast from '../../hooks/useShowToast'

export default function EditProfile({isOpen,onClose}) {
    const authUser=useAuthStore(state=>state.user)
    const {selectedFile, handleImageChange,setSelectedFile}=usePreviewImg()
    console.log(selectedFile)
    const  {editProfile,isUpdating}=useEditProfile()
    const fileRef=useRef(null)
    const showToast=useShowToast()
    const [inputs,setInputs]=useState({
        fullName:"",
        userName:"",
        bio:"",
        profileURL:""
    })
    const handleProfilEdit= async()=>{
     try{
        await editProfile(inputs,selectedFile);
        setSelectedFile(null)
        onClose()
     }catch(error){
      showToast("Error",error.message,"error")

     }
    }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent bg={"black"}>
      <ModalCloseButton />
      <ModalBody>
      <Flex
   
      >
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
    
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          Edit Profile
        </Heading>
        <FormControl id="userName">
        
          <Stack direction={['column', 'row']} spacing={6}>
            <Center>
              <Avatar size="xl" src={selectedFile||authUser.profilePicURL}>
              </Avatar>
            </Center>
            <Center w="full">
              <Button w="full" onClick={()=>fileRef.current.click()}>Edit Profile Picture</Button>
            </Center>
            <Input type='file' hidden ref={fileRef} onChange={ handleImageChange}/>
          </Stack>
        </FormControl>
        <FormControl id="fullName" >
          <FormLabel>Full name</FormLabel>
          <Input
            placeholder="fullName"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            value={inputs.fullName || authUser.fullName}
            onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}
          />
        </FormControl>
        <FormControl id="userName" >
          <FormLabel>Username</FormLabel>
          <Input
            placeholder="UserName"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            value={inputs.userName || authUser.userName}
            onChange={(e)=>setInputs({...inputs,userName:e.target.value})}
          />
        </FormControl>
        <FormControl id="bio">
          <FormLabel>Bio</FormLabel>
          <Input
            placeholder="Bio"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            value={inputs.bio || authUser.bio}
            onChange={(e)=>setInputs({...inputs,bio:e.target.value})}
          />
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            
            w="full"
            _hover={{
              bg: 'red.500',
            }}
           
            onClick={onClose}
            >
            Cancel
          </Button>
          <Button
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
            }}
          
            onClick={handleProfilEdit}
            >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
      </ModalBody>
    </ModalContent>
  </Modal>
  )
}
