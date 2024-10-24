
import { Container, Flex,  Skeleton,  SkeletonCircle,  Text, VStack } from '@chakra-ui/react'
import React from 'react'
import ProfileHeader from '../../Components/Profile/ProfileHeader'
import ProfileTaps from '../../Components/Profile/ProfileTaps'
import ProfilePosts from '../../Components/Profile/ProfilePosts'
import { Link, useParams } from 'react-router-dom'
import useGetUserProfileByUsername from '../../hooks/useGetUserProfileByUsername'

export default function ProfilePage() {
  const {username}=useParams()
  const {isLoading,userProfile}= useGetUserProfileByUsername(username)
  const userNotFound=!isLoading && !userProfile
  if(userNotFound) return <UserNotFound/>
  return (
  <Container maxWidth={"container.lg"}>
   
    <Flex
    py={10}
    px={4}
    pl={{base:4,md:10}}
    w={"full"}
    mx={"auto"}
    flexDirection={"column"}
    >
      {!isLoading && userProfile && <ProfileHeader/>}
      {isLoading &&<ProfileHeaderSkelton/>}

    </Flex>
    <Flex
    px={{base:2,sm:4}}
    maxW={"full"}
    borderTop={"1px solid"}
    borderColor={"whiteAlpha.300"}
    direction={"column"}
    >
<ProfileTaps/>
<ProfilePosts/>
    </Flex>

  </Container>
  )
}


const ProfileHeaderSkelton=()=>{
  return(
    <>
    <Flex gap={{base:4,sm:10}}
    py={10}
    direction={{base:"column",sm:"row"}}
    justifyContent={"center"}
    alignItems={"center"}
    >
      <SkeletonCircle size='24'/>
      <VStack alignItems={{base:"center",sm:"flex-start"}} gap={2} mx={"auto"} flex={1}>
        <Skeleton height={'12px'} width={"150px"}/>
        <Skeleton height={'12px'} width={"100px"}/>
      </VStack>

    </Flex>
    </>
  )
}



const UserNotFound=()=>{
  return(
    <Flex flexDir={"column"} textAlign={"center"}mx={"auto"}>
      <Text fontSize={"2xl"} textAlign={"center"} m={"auto"}>
     User Not Found
      </Text>
      <Link to={'/'} color={'blue.500'} w={"max-content"} mx={"auto"}>
      Go home
      </Link>
    </Flex>
  )
}