import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {useParams} from "react-router-dom";
import {  Box,  Image,  useColorModeValue, Text,  HStack, Button, Flex, Heading, Input, useToast, Avatar, } from '@chakra-ui/react'

import Skeltonlist from '../components/Skeltonlist'
import { Singleuser, UpdatedPost } from '../Redux/AuthReducer/action';


const UserEdit = () => {
    const toast = useToast()
    const lightColor = useColorModeValue("#757575", "#9aa0a6");
    const [single ,Setsingle] = useState()
   const dispatch = useDispatch()
     const {id} = useParams()
     
  
     
     const [post,SetPost] = useState({
        bio:""
     })

     const handleChange = (e) =>{
        const {name,value}= e.target
        SetPost({...post,[name]:value})
     }

      const handleupdate = (_id) =>{
         dispatch(UpdatedPost(_id,post))
         .then((res) =>{
            console.log(res)
               if(res.type == "EDIT_DATA_SUCCESS" && res.payload.msg == "update data sucessfully"){
                 toast({
                   position:"top",
                   status : "success",
                   title:res.payload.msg
                  })
               }  
               else{
                 toast({
                   position:"top",
                   status : "error",
                   title:res.payload.msg
                  })
               }
            
          }).catch((err) =>{
             console.log(err)
          })
      }

      useEffect(() =>{
        dispatch(Singleuser(id))
        .then((res) =>{
          //  console.log(res)
          Setsingle(res.payload)
        })
      },[id])
   


  return (
    <>
      {
        single ? 

      <Box   width={{base:"80vw",md:"90vw",lg:"90vw" }}  m="auto" mt="10" p="6" spacing={3} >
     
     <Flex
          justifyContent="space-between"
          direction={{ base: "column", sm: "row" }}
          gap={{ base: 5, sm: 0 }}
        >
          <HStack spacing={5} mb="5">
            <Heading > Edit Post </Heading>
          </HStack>
          <hr />
  
          <HStack spacing={5} mb="5">
             <Button colorScheme='facebook'  fontSize={"1.2rem"} fontWeight={"600"} onClick={() =>handleupdate(single?._id)}>Updated Post</Button>
          </HStack>
        </Flex> 
        
       <Heading  textAlign={"start"} mb="5" > {single?.title}  </Heading>
             <Box width={"100%"} mb="5"> 
                    <Avatar  
                      size="2xl"
                     alt="cover"
                     name={single?.name}
                   src={single?.pic} />
            </Box>
       
              <Box fontSize={"1.2rem"} letterSpacing={2} textAlign={"start"} spacing={5} dangerouslySetInnerHTML={{ __html: single?.content }}/>

         
      </Box> 
   
     : <Skeltonlist/>

    }
    
     <Box width={{base:"60vw",md:"80vw",lg:"80vw" }} m="auto"  mb="10">
        <Input  placeholder='Updated Bio'
         name="bio"
         onChange={handleChange}
          fontSize={"1.2rem"} variant={"unstyled"} 
               mt="6" mb="6" 
         />
     </Box>
     
    </>
  )
}

export default UserEdit