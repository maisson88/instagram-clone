import { Container, Flex ,Box} from "@chakra-ui/react";
import FeedPosts from "../../Components/FeedPosts/FeedPosts";
import SuggestsUsers from "../../Components/SuggestsUser/SuggestsUsers";



const HomePage=()=>{
    return(
        <>
      <Container maxW={"container.lg"}>
        <Flex gap={20}>
            <Box flex={2} py={10}>
              <FeedPosts/>
                </Box>
                <Box flex={3} mr={20} display={{base:"none",lg:"block"}} maxW={"300px"}>
                   <SuggestsUsers/>
                    </Box>
        </Flex>

      </Container>
        </>
    )
}
export default HomePage;