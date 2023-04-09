import {  Avatar,  Box,  Button,  ButtonGroup,Divider,  Heading,  Image,  Stack,  Text,  Wrap,  WrapItem,} from "@chakra-ui/react";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { AiOutlineLike } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { MdAutoDelete } from "react-icons/md";




const Dashboard = () => {
  return (
    <>
      <Box width={"100%"} border={"5px solid pink"}>
        <Card  maxW={{base:"2xl", md:"4xl",lg:"4xl"}}  m="auto">
          <CardBody>
            <Box display={"flex"} gap="5" p="4">
              <Wrap>
                <WrapItem>
                  <Avatar
                    m="auto"
                    size={{ base: "md", md: "md", lg: "md" }}
                    name={"Ashutosh"}
                  />
                </WrapItem>
              </Wrap>
              <Box justifyContent={"center"} display={"flex"} gap="5">
                <Text m="auto" mt="3" fontWeight={"600"}>
                  {" "}
                  Ashutosh{" "}
                </Text>
                <Text m="auto" mt="3">
                  {" "}
                  Sat{" "}
                </Text>
              </Box>
            </Box>

            <Image
              objectFit="cover"
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md"  letterSpacing={1} textAlign={"start"} fontFamily={"playfair"}>Living room Sofa</Heading>
              <Text noOfLines={3}  textAlign={"start"} fontSize={{base:".8rem",md:"1rem",lg:"1rem" }} letterSpacing={2} >
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter >
            <ButtonGroup spacing="2" justifyItems={"center"}>
              <Button>View</Button>

              <Button flex="1" variant="ghost" leftIcon={<AiOutlineLike />}>
                Like
              </Button>

              <Button variant="ghost" leftIcon={<CiEdit />}>
                Edit
              </Button>
              <Text textAlign={"center"} m="auto">
                <MdAutoDelete />
              </Text>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Box>
    </>
  );
};

export default Dashboard;
