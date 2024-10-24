import {Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import useLogin from '../hooks/useLogin'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export default function Login() {
  const [showPassword,setShowPassword]=useState("password")
    const [inputs,setInputs]=useState({
        email:"",
        password:"",
       
    })
    const {loading,error,login}=useLogin()
  return (
   <>
     <Input size={"sm"} value={inputs.email} type='email' placeholder='Email' fontSize={14} onChange={(e)=>setInputs({...inputs,email:e.target.value})} />
     <InputGroup>
     
     <Input size={"sm"} value={inputs.password} type={showPassword?"text":'password'} placeholder='Password' onChange={(e)=>setInputs({...inputs,password:e.target.value})} />
     <InputRightElement h={"full"}>
     <Button variant={"ghost"} size={"sm"} onClick={()=>setShowPassword(!showPassword)} cursor={"pointer"}>
      {
        showPassword?<ViewIcon/>:<ViewOffIcon/>
      }
     </Button>
     </InputRightElement>

     </InputGroup>
     {
    error && (
        <Alert status='error' fontSize={13} p={2} borderRadius={4}>
            <AlertIcon fontSize={12}/>
            {error.message}

        </Alert>
    )
   }

     <Button  colorScheme='blue'w={"full"} size={"sm"} fontSize={14} isLoading={loading} onClick={()=>login(inputs)}>Log in</Button>
   </>
  )
}
