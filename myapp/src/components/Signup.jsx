import React, { useState } from "react";
import {  Button,  Card,  CardBody,  Input,  InputGroup,  InputLeftElement,  InputRightElement,  VStack,  useColorModeValue,useToast,} from "@chakra-ui/react";
import { CiUser } from "react-icons/ci";
import { EmailIcon, UnlockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { BsCardImage } from "react-icons/bs";

const Signup = () => {
  const colorScheme = useColorModeValue("blue", "green");
  const [show, setShow] = useState(false);
  const [image, SetImage] = useState("");
  const [url, SetUrl] = useState("");
   const [pic,Setpic] = useState("")
  const toast = useToast();

  
  const handleClickShow = () => {
    setShow(!show);
  };


  return (
    <>
      <Card py="3">
        <CardBody>
          <VStack maxW="2xl" spacing={5}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                position="absolute"
                top="1"
                children={<CiUser color="gray" size="23" />}
              />
              <Input
                placeholder="Name*"
                type="name"
                name="name"
              
                size="lg"
              />
            </InputGroup>

            <InputGroup position="relative">
              <InputLeftElement
                textAlign={"center"}
                pointerEvents="none"
                position="absolute"
                top="1"
                children={<BsCardImage color="gray" size="25" />}
              />
              <Input
                placeholder="Paste URL*"
                type="file"
                name="pic"
                onChange={(e) => SetImage(e.target.files[0])}
                size="lg"
                accept="image/*"
                sx={{
                  "::file-selector-button": {
                    height: 8,
                    mr: 4,
                    border: "1px solid grey",
                    mt: 2,
                  },
                }}
              />
            </InputGroup>

            <InputGroup position="relative">
              <InputLeftElement
                pointerEvents="none"
                position="absolute"
                top="1"
                children={<EmailIcon color="gray.400" boxSize={5} />}
              />
              <Input
                placeholder="Email*"
                type="email"
                name="email"
                size="lg"
               
              />
            </InputGroup>

            <InputGroup position="relative">
              <InputLeftElement
                pointerEvents="none"
                position="absolute"
                top="1"
                children={<UnlockIcon color="gray.400" boxSize={5} />}
              />
              <Input
                type={show ? "text" : "password"}
                placeholder="Password*"
                name="password"
                size="lg"
             
              />
              <InputRightElement width="4.5rem" position="absolute" top="1">
                <Button
                  h="1.75rem"
                  size="sm"
                  variant="link"
                  onClick={handleClickShow}
                >
                  {show ? (
                    <ViewOffIcon color="gray.400" boxSize={5} />
                  ) : (
                    <ViewIcon color="gray.400" boxSize={5} />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button
              width="100%"
              colorScheme={colorScheme}
              size="lg"
            >
              Signup
            </Button>
          </VStack>
        </CardBody>
      </Card>
    
    </>
  )
}

export default Signup