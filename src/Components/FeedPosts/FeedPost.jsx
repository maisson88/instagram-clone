import { Box, Image } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

const FeedPost=({img,username,avater})=>{
    return(
        <>
     <PostHeader username={username} avater={avater}/>
     <Box my={2}>
        <Image src={img} borderRadius={4}/>
        </Box>
        <PostFooter username={username}/>
        </>
    )
}
export default FeedPost;