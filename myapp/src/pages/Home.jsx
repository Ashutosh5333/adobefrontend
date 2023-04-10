import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Dashboard from "../components/Dashboard";
import TopActive from "../components/TopActive";
import { Link } from "react-router-dom";

                                          
const Home = () => {
  return (
    <>
      <Flex w="95vw"   m="auto" mt="10" display={{base:"row",md:"flex", lg:"flex"}}   justifyContent={"space-between"} gap={"5"}>
        
        <Box  w={{base:"90vw",md:"75vw",lg:"75vw"}} >
          <Dashboard/>
        </Box>

        <Box   w={{base:"90vw",md:"25vw",lg:"25vw"}}>
           <Heading fontSize="1rem" > Top Active Users </Heading>
               <TopActive/>

               <Link to={`/user`}>
              <Button colorScheme="red"> SeeAll </Button> 
               </Link>
        </Box>

      </Flex>
    </>
  );
};

export default Home;
