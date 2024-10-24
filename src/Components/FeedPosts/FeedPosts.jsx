import { Container, Flex, Skeleton, SkeletonCircle, VStack,Box, Text } from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useEffect, useState } from "react";



const FeedPosts=()=>{
  const [isLoading,setIsLoading]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },2000)
  },[])
    return(
        <>
      <Container maxW={"container.sm"} py={10} px={2}>
        {
          isLoading && [0,1,2,3].map((_,idx)=>(
            <VStack key={idx}  gap={4} alignItems={"flex-start"} mb={10}>
              <Flex gap='2'>

             <SkeletonCircle size='10'/>
             <VStack gap={2} alignItems={"flex-start"}>
              <Skeleton height="10px" w={"200px"}/>
              <Skeleton height="10px" w={"200px"}/>
             </VStack>
              </Flex>
              <Skeleton w={"full"}>
                <Box h={"500px"}>
                  contents
                </Box>

              </Skeleton>
            </VStack>
          ))
        }
        {
          !isLoading && (<>
          <FeedPost img="/img1.png" username="maison_Ahmed" avater="/img1.png"/>
<FeedPost img="/img2.png" username="moazz_Ahmed" avater="/img2.png"/>
<FeedPost img="/img3.png" username="mariam_Ahmed" avater="/img3.png"/>
<FeedPost img="/img4.png" username="maison_Ahmed" avater="/img4.png"/>
          </>)
        }
        <Box >
          <Text fontSize={'sm'} color={"gray.400"}>
          2024 Built By As a program
            </Text> 
        
        </Box>

      </Container>
        </>
    )
}
export default FeedPosts;