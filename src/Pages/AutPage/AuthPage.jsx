
import { Box, Container, Flex, VStack,Image } from '@chakra-ui/react'
import AuthForm from '../../Components/AuthForm'

const AuthPage=()=>{
    return(
        <>
        <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
        <Container maxW={"container.md"} padding={0}>
            <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
            <Box display={{base:'none',md:'block'}}>
                   <Image src="/auth.png" alt="" height={650} />
              </Box>
              <VStack spacing={4} align={"stretch"}>
                 <AuthForm/>
                 <Box textAlign={"center"}>Get the App.</Box>
                 <Flex gap={5} justifyContent={"center"}>
                 <Image src="./playstore.png" alt="" h={'10'} />
                 <Image src="./microsoft.png" alt="" h={'10'} />
                 </Flex>
                 
              </VStack>
            </Flex>
            
             
        </Container>
        </Flex>
        
        </>
    )
}
export default AuthPage