import React, {  useState } from "react";
import {  VStack,  Input,  Button,  InputGroup,  InputRightElement,  CircularProgress, CircularProgressLabel,   useToast,   InputLeftElement,  Card,  CardBody, useColorModeValue,} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon, EmailIcon, UnlockIcon } from "@chakra-ui/icons";
import {json, useNavigate} from "react-router-dom";




const Login = () => {
  const [show, setShow] = useState(false);
  const colorScheme = useColorModeValue("blue", "green");
  const toast = useToast()
  const navigate = useNavigate()

  

  const [post ,SetPost] = useState({
    email:"",
    password:"",
  })



  return (
    <>
 <Card py="3">
      <CardBody>
        <VStack maxW={"2xl"} spacing={5}>
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
                size="lg"
                variant="link"
             
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
            size="lg"
            colorScheme={colorScheme}
            loadingText={"Login"}
            isDisabled={
                 post.email=="" || post.password ==""
             }
          >
            Login
          </Button>
        </VStack>
      </CardBody>
    </Card>
    
    </>
  )
}

export default Login