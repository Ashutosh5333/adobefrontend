import React, { useEffect, useState } from "react";
import { Modal,  ModalOverlay,  ModalContent,  ModalBody,  useDisclosure,  Box,  Button,  Input,  Heading,  Text, useToast,} from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const UserEdit = () => {
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = React.useRef(null);
     const dispatch = useDispatch()
    const {id} = useParams()
  
      const [post,SetPost] = useState({
           content:"",
        
      })

       const handleChange = () =>{

       }



  return (
    <>
  <Box
        ref={finalRef}
        tabIndex={-1}
        aria-label="Focus moved to this box"
      ></Box>

      <Button onClick={onOpen}>Edit</Button>

      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width={{ base: "80%", md: "80%", lg: "90%" }} p="6">
          <ModalBody>
            <Box textAlign={"center"}>
              <Heading mb="4"> Updated Content </Heading>

              <Text noOfLines={3}  textAlign={"start"} fontSize={{base:".8rem",md:"1rem",lg:"1.2rem" }} letterSpacing={2}  > Content </Text>

              <Input placeholder="Content" 
               name="content"
                onChange={handleChange}
               fontSize={"1.2rem"} variant={"unstyled"} 
               mt="6" mb="6" 
               />

             

              <Divider orientation="horizontal" />

              <Box display="flex" justifyContent={"space-evenly"} mt="6">
                <Button p={5} fontWeight="600" colorScheme="red" onClick={onClose}>
                  Cancel
                </Button>
                <Button   p={5} fontWeight="600" colorScheme="blue" >
                   Updated
                </Button>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>

    </>
  )
}

export default UserEdit