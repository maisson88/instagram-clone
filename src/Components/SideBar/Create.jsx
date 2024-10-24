import React from 'react'
import { CreatePostLogo } from '../../assets/constants'
import { Box, Tooltip,Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

function Create() {
  return (
    <Tooltip  hasArrow label={"Create"}
    placement="right"
    ml={1}
    openDelay={500}
    display={{base:"block",md:"none"}}
    >
        <Link display={"flex"} to={'/'} as={RouterLink} alignContent={"center"}
        gap={4} _hover={{bg:"whiteAlpha.200"}}
        borderRadius={6}
        p={2}
        w={{base:10,md:"full"}}
        >
            <CreatePostLogo/>
            <Box display={{base:"none",md:"block"}}>create</Box>
        </Link>
      
    </Tooltip>
  )
}

export default Create
