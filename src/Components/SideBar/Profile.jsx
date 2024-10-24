import { Avatar, Box, Tooltip,Link } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import useAuthStore from '../../store/AuthStore'

function Profile() {
    const authUser=useAuthStore((state)=>state.user)
  return (
    <Tooltip hasArrow label={"Profile"}
    placement="right"
    ml={1}
    openDelay={500}
    display={{base:"block",md:"none"}}
    >
        <Link display={"flex"} to={`/${authUser?.userName}`} as={RouterLink} alignContent={"center"}
        gap={4} _hover={{bg:"whiteAlpha.200"}}
        borderRadius={6}
        p={2}
        w={{base:10,md:"full"}}
        >
           <Avatar size={"sm"} name="maisson Ahmed" src={authUser?.profilePicURL || ""}/>
            <Box display={{base:"none",md:"block"}}>profile</Box>
        </Link>
      
    </Tooltip>
  )
}

export default Profile
