import React, { useEffect, useState } from "react";
import {  Button,  Card,  CardBody,  Input,  InputGroup,  InputLeftElement,  InputRightElement,  VStack,  useColorModeValue,useToast,} from "@chakra-ui/react";
import { CiUser } from "react-icons/ci";
import { EmailIcon, UnlockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { Signupdata } from "../Redux/AuthReducer/action";

const Signup = () => {
  const colorScheme = useColorModeValue("blue", "green");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
 
  const toast = useToast();

  const [post, SetPost] = useState({
    name: "",
    email: "",
    password: "",
  });

  // http://localhost:8000/users/create
  // https://tough-knickers-colt.cyclic.app/

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetPost({ ...post, [name]: value });
  };
 

     const handleSubmit = () => {
        dispatch(Signupdata(post))
        .then((res) => {
          console.log(res);
          if (
            res.type === "GET_SIGNUP_SUCCESS" &&
            res.payload.data !== "user is already present"
          ) {
            toast({
              position: "top",
              status: "success",
              title: "user created Successfully Account",
            });
          } else {
            toast({
              position: "top",
              status: "error",
              title: "user Already exits try Another",
            });
          }
        })
        .catch((err) => {
          console.log(err);
          toast({
            position: "top",
            status: "error",
            title: "Something went wrong",
          });
        });


     }

  
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
                onChange={handleChange}
                
                size="lg"
              />
            </InputGroup>

{/* 
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
               
                sx={{
                  "::file-selector-button": {
                    height: 8,
                    mr: 4,
                    border: "1px solid grey",
                    mt: 2,
                  },
                }}
              />
            </InputGroup> */}

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
                onChange={handleChange}
               
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
                onChange={handleChange}
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
            onClick={handleSubmit}
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