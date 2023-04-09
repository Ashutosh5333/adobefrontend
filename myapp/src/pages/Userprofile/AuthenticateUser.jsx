import React from "react";
import { Box } from '@chakra-ui/react';
import UserDashboard from "./UserDashboard";
import UserBoard from "./UserBoard";

const AuthenticateUser = () => {
  return (
    <>
      <Box
        display={{ base: "row", md: "flex", lg: "flex" }}
        justifyContent={"space-between"}
        width={"95vw"}
        m="auto"  mt="10" gap="5">
        <Box>
         <UserDashboard/>
        </Box>

        <Box>
         <UserBoard/>         
        </Box>
      </Box>
    </>
  );
};

export default AuthenticateUser;
