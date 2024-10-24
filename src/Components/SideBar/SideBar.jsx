import { Box, Button, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {InstagramLogo, InstagramMobileLogo } from "../../assets/constants";

import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import SidebarItems from "./SidebarItems";

const SideBar = () => {
    const{ handlelogout,isLoggingOut,error}=useLogout()
    return (
        <Box
            height={"100vh"}
            borderRight={"1px solid"}
            borderColor={"whiteAlpha.100"}
            py={8}
            position={"sticky"}
            top={0}
            left={0}
            px={{ base: 2, md: 4 }}
        >
        

             <Link to={"/"}  as={RouterLink} pl={2} display={{ base: "none", md: "block" }} cursor="pointer">
                    <InstagramLogo/>
                </Link>
            <Flex py={6} pt={{base:10,sm:0}} direction={"column"} justifyContent={"space-between"}  gap={10} w={"full"} height={"full"}>
               
            


              
                <Flex pt={10} direction={"column"} alignItems={"space-between"} gap={5} cursor={"pointer"}>
                <Link to={"/"} as={RouterLink} p={2} display={{ base: "block", md: "none" }} cursor="pointer"  borderRadius={6} _hover={{bg:"whiteAlpha.200"}}
                w={{base:10}}
                >
                    <InstagramMobileLogo/>
                </Link>
                    
                 <SidebarItems/>
                     
                    </Flex>



                    <Link>
                                <Tooltip  hasArrow label={"Logout"}
                                placement="right"
                                ml={1}
                                openDelay={500}
                                display={{base:"block",md:"none"}}
                                >
                                    <Flex 
                                    onClick={handlelogout}
                                    alignItems={"center"}
                                    alignContent={"center"}
                                    gap={4} _hover={{bg:"whiteAlpha.200"}}
                                    borderRadius={6}
                                    p={2}
                                    w={{base:10,md:"full"}}
                                    mt={"auto"}
                                    justifyContent={{base:"center",md:"flex-start"}}
                                    >
                                       <BiLogOut
                                       
                                        size={25}/>
                                        <Button
                                        variant={"ghost"}
                                        _hover={{bg:"transparent"}}
                                        isLoggingOut={isLoggingOut}
                                         display={{base:"none",md:"block"}}>Log Out</Button>
                                    </Flex>
                                  
                                </Tooltip>
                                </Link>
               
              
                
            </Flex>
        </Box>
    );
};

export default SideBar;