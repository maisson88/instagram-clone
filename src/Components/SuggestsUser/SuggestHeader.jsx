
import { Avatar, Box, Button, Flex,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import useLogout from '../../hooks/useLogout'
import useAuthStore from '../../store/AuthStore'

export default function SuggestHeader() {
  const {handlelogout,isLginOut}=useLogout()
  const authUser=useAuthStore((state)=>state.user)
  return (
   <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
    <Flex alignItems={"center"} gap={2}>
      <Link to={`${authUser.userName}`}>
      <Avatar name={authUser.userName} size={"md"} src={authUser.profilePicURL}/>
      </Link>
      <Link to={`${authUser.userName}`}>
    <Text fontSize={12} fontweight={"bold"}>
      {authUser.userName}
    </Text>
    </Link>

    </Flex>
    <Button size={"xs"} bg={"transparent"} _hover={{background:"transperent"}} fontSize={14} fontweight={"medium"} color={'blue.400'} cursor={"pointer"}
  isLoading={isLginOut}
  onClick={handlelogout}
    >
    Log Out
    </Button>
   </Flex>
  )
}
