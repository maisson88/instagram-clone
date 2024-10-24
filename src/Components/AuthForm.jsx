import { Box, Image, VStack,Flex } from "@chakra-ui/react"
import { useState } from "react"
import Login from "./Login"
import Signup from "./Signup"
import GoogleAuth from "./GoogleAuth"




const AuthForm=()=>{

    const [isLogin,setIsLogin]=useState(true)

    
    return(
        <>
       <Box border={"1px solid gray"} borderRadius={"4"} padding={5}>
        <VStack spacing={4}>
        <Image src="./logo.png" h={"24"} cursor={"pointer"}/>

   {
    isLogin?<Login/>:<Signup/>
   }
          

        <div style={{display:"flex", justifyContent:'center',alignItems:'center',gap:"6px",margin:"4px 0 4px 0"}}>
        <div style={{height:"1px",borderRadius:"7px", backgroundColor:"gray",width:"100px"}}></div>
        <h1 style={{fontWeight:"bold"}}>OR</h1>
        <div style={{height:"1px",borderRadius:"7px",  backgroundColor:"gray",width:"100px"}}></div>
        </div>
     <GoogleAuth prefix={isLogin?"LogIn with Google":"SignUp with Google"}/>
   
        </VStack>
         
       </Box>
       <Box border={"1px solid gray"} borderRadius={"4"} padding={5}>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Box mx={2} fontSize={14}>
         {
            isLogin?"Dont have an account?":"Aready have an account?"
         }
        </Box>
        <Box cursor={"pointer"} color={"blue.500" } onClick={()=>setIsLogin(!isLogin)}>
            {
                isLogin?"Sign Up":"Log In"
            }

        </Box>

      </Flex>
       </Box>

        </>
    )
}
export default AuthForm