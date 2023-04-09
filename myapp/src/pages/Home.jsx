import { Box, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import Dashboard from "../components/Dashboard";

                                          
const Home = () => {
  return (
    <>
      <Flex w="95vw"   m="auto"  display={{base:"row",md:"flex", lg:"flex"}}   justifyContent={"space-between"} gap={"5"}>
        
        <Box  w={{base:"90vw",md:"75vw",lg:"75vw"}} >
          <Dashboard/>
        </Box>

        <Box  border={"3px solid green"} w={{base:"90vw",md:"25vw",lg:"25vw"}}>
               Top Active Users
        </Box>

      </Flex>
    </>
  );
};

export default Home;
