import React from 'react'
import { NotificationsLogo } from '../../assets/constants'
import { Box, Tooltip ,Link } from '@chakra-ui/react'
import { Link as RouterLink} from 'react-router-dom'

function Notification() {
  return (
    <Tooltip  hasArrow label={"Notifications"}
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
           <NotificationsLogo />
            <Box display={{base:"none",md:"block"}}>Notifications</Box>
        </Link>
      
    </Tooltip>
  )
}

export default Notification
