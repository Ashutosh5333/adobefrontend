import React, {  useState } from "react";
import {  VStack,  Input,  Button,  InputGroup,  InputRightElement,  useToast,   InputLeftElement,  Card,  CardBody, useColorModeValue,} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon, EmailIcon, UnlockIcon } from "@chakra-ui/icons";
import {json, useNavigate} from "react-router-dom";
import { Loginupdata } from "../Redux/AuthReducer/action";
import { useDispatch } from "react-redux";



const Login = () => {
  const [show, setShow] = useState(false);
  const colorScheme = useColorModeValue("blue", "green");
  const toast = useToast()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  const [post ,SetPost] = useState({
    email:"",
    password:"",
  })

  const handleChange = (e) => {
    const {name,value} = e.target
    SetPost({...post,[name]:value})
}

const handleSubmit = () =>{
  dispatch(Loginupdata(post))
  .then((res) =>{
   // console.log(res)
      if(res.type === "GET_LOGIN_SUCCESS" && res.payload.data.msg == "Login sucessfull"){
       toast({
         position:"top",
         status : "success",
         title:res.payload.data.msg
        })
         localStorage.setItem("token", JSON.stringify(res.payload.data.token))
          localStorage.setItem("data",JSON.stringify(res.payload.data.data))
         navigate("/")
         window.location.reload()
      }else{
       toast({
         position:"top",
         status : "error",
         title:res.payload.data
        })
      }
   
   
  })
  .catch((err) =>{
   console.log(err)
   toast({
     position:"top",
     status : "error",
     title:err
    })
  })
}

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
            onClick={handleSubmit}
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