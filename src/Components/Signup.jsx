

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement} from '@chakra-ui/react'
import React, { useState } from 'react'
import useSignUpWithEmailAndPassword from '../hooks/useSignUpWithEmailAndPassword'

export default function Signup() {
    const [inputs,setInputs]=useState({
        fullName:"",
        userName:"",
        email:"",
        password:"",
    })
    const [showPassword,setShowPassword]=useState(false)
    const {signup,loading,error}= useSignUpWithEmailAndPassword()
  return (
   <>
    <Input value={inputs.email} type='email' placeholder='Email' fontSize={14} onChange={(e)=>setInputs({...inputs,email:e.target.value})}    size={"sm"} />
    <Input value={inputs.userName} type='text' placeholder='Username' fontSize={14} onChange={(e)=>setInputs({...inputs,userName:e.target.value})}    size={"sm"} />
    <Input value={inputs.fullName} type='text' placeholder='Full Name' fontSize={14} onChange={(e)=>setInputs({...inputs,fullName:e.target.value})} 
       size={"sm"}
    />
    
   <InputGroup>
   <Input value={inputs.password} type={showPassword?"text":'password'} placeholder='Password' onChange={(e)=>setInputs({...inputs,password:e.target.value})}
   size={"sm"}
    />
    <InputRightElement h={"full"}>
    <Button variant={"ghost"} size={"sm"} onClick={()=>setShowPassword(!showPassword)}>
        {
            showPassword?<ViewIcon/>:<ViewOffIcon/>
        }

    </Button>
    </InputRightElement>
   </InputGroup>
   {
    error&&(
        <Alert status='error' fontSize={13} p={2} borderRadius={4}>
            <AlertIcon fontSize={12}/>
            {error.message}

        </Alert>
    )
   }
   <Button colorScheme='blue'w={"full"} size={"sm"} fontSize={14}  
   isLoading={loading}
   onClick={()=>signup(inputs)}
    >Sign Up</Button>
   </>
  )
}
