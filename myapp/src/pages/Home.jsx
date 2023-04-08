import { Box, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import Dashboard from "../components/Dashboard";

const Home = () => {
  return (
    <>
      <Flex w="95vw"   m="auto" border={"2px solid red"} display={"flex"}   justifyContent={"space-between"} gap={"5"}>
        
        <Box   border={"3px solid black"} w="75vw">
          <Dashboard/>
        </Box>

        <Box  border={"3px solid green"} w="25vw">
               Top Active Users
        </Box>

      </Flex>
    </>
  );
};

export default Home;
