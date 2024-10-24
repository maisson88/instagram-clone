
import {SearchLogo } from '../../assets/constants'
import { Box, Tooltip,Link, useDisclosure ,Button, Input, Text, FormControl, FormLabel, Flex, Avatar} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import useSearchUser from '../../hooks/useSearchUser'
import { useEffect, useRef, useState } from 'react'
function Serarch() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [searchUser,setSearchUser]=useState("")
  const {isLoading,user,getUserProfile}=useSearchUser();
  const searchRef=useRef(null)

const handleSearch=(e)=>{
  e.preventDefault()
 getUserProfile(searchRef.current.value)

}
console.log(user)
  return (
    <>
     <Tooltip  hasArrow label={"Search"}
    placement="right"
    ml={1}
    openDelay={500}
    display={{base:"block",md:"none"}}
    >
        <Link display={"flex"}  alignContent={"center"}
        gap={4} _hover={{bg:"whiteAlpha.200"}}
        borderRadius={6}
        p={2}
        w={{base:10,md:"full"}}
        onClick={onOpen}
        >
            <SearchLogo/>
            <Box display={{base:"none",md:"block"}}>Search</Box>
        </Link>
      
    </Tooltip>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={"black"}>
          <ModalHeader>Search user</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
       
  <form onSubmit={handleSearch}>
  <FormControl>
    <FormLabel>username</FormLabel>
    <Input type='text' placeholder='search' ref={searchRef}/>
  </FormControl>
  <Flex mt={3} justifyContent={"flex-end"}>
  <Button  type='submit' isLoading={isLoading}>Search</Button>
  </Flex>
  </form>
{
  user?<Link to={`/${user.userName}`} as={RouterLink}> <Flex cursor={"pointer"} mx={3} gap={3} alignItems={"center"}> <Avatar src={user.profilePicURL}/> <Text>{user.userName}</Text></Flex></Link>:"Not Found"
 
}
 
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
   
  )
}

export default Serarch
