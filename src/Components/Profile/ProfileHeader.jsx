import { Button, Flex, Image, Text, useDisclosure } from '@chakra-ui/react'

import useUserProfileStore from '../../store/useProfileStore';
import useAuthStore from '../../store/AuthStore';
import EditProfile from './EditProfile';
import useFollowUser from '../../hooks/useFollowUser';


export default function ProfileHeader() {

 
const {userProfile}=useUserProfileStore()
const authUser=useAuthStore(state=>state.user)
const  {isUpdating,isFollowing,handleFollowUser}=useFollowUser(userProfile?.uid)
const visitingOwnProfileAndAuth=authUser && authUser.userName===userProfile.userName
const visitingAnotherProfileAndAuth=authUser && authUser.userName !== userProfile.userName

const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
  <Flex alignItems={"center"} gap={{base:4,sm:10}} py={10} direction={{base:"column",sm:"row"}}>
  
    <Image src={userProfile.profilePicURL} style={{width:"150px",height:"150px",borderRadius:"50%",border:"1px solid gray"}}/>
    <Flex flexDirection={"column"} gap={3}>
        <Flex alignItems={"center"} gap={4}>{userProfile.userName}
          {
            visitingOwnProfileAndAuth && <Button  fontSize={{base:"xs",md:"sm"}} bg={"white"} color={"black"} _hover={{bg:"whithAlpha.800"}}  onClick={onOpen}>Edit Profile</Button>
          }
               {
            visitingAnotherProfileAndAuth && <Button  fontSize={{base:"xs",md:"sm"}} bg={"white"} color={"white"} _hover={{bg:"blue.400"}} backgroundColor={"blue.500"} onClick={handleFollowUser} isLoading={isUpdating}>{ isFollowing?"Unfollow":"Follow"}</Button>
          }
           
        </Flex>
        <Flex gap={3} fontSize={{base:"xs",md:"sm"}} fontWeight={"semibold"}  justifyContent={{base:"flex-start",sm:"center"}}>
            <Text>{userProfile.posts.length} Posts</Text>
            <Text>{userProfile.followers.length} Followers</Text>
            <Text>{userProfile.following.length} Following</Text>
        </Flex>
        
<Text fontSize={"sm"} fontWeight={"bold"} > {userProfile.fullName}</Text>
<Text fontSize={"sm"} color={"gray.500"}>{userProfile.bio}</Text>
    </Flex>
  </Flex>
<EditProfile isOpen={isOpen} onClose={onClose}/>
  </>
  
  )
}
