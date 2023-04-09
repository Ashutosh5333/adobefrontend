import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {useParams} from "react-router-dom";
import {  BsFacebook,  BsTwitter,  BsLinkedin,  BsLink45Deg,  BsBookmarkPlus,} from "react-icons/bs";
import { Avatar, Box,  Image,  useColorModeValue, Text,  HStack,  Tooltip, Flex, Heading, } from '@chakra-ui/react'

import { getSinglePostData } from '../Redux/AppReducer/action';
import Skeltonlist from './Skeltonlist';


const SinglePost = () => {
  const lightColor = useColorModeValue("#757575", "#9aa0a6");
  const [single ,Setsingle] = useState()
 const dispatch = useDispatch()
   const {id} = useParams()
   
     useEffect(() =>{
       dispatch(getSinglePostData(id))
       .then((res) =>{
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
            <Avatar 
            //  src={single?.postedby.pic}
              name={single?.postedby.name}
            />
            <Flex direction="column">
              
              <Text fontSize={"lg"} fontWeight={"600"}>{single?.postedby.name} </Text>
              <Text color={lightColor}>
              <Text m="auto" mt="3" > {new Date(single?.createdAt).toDateString()} </Text>
              </Text>
            </Flex>
          </HStack>
          <hr />
  
          <HStack spacing={5} mb="5">
         
            <Tooltip hasArrow label="Share on Twitter" placement="top">
              <Box cursor="pointer">
                <BsTwitter size={20} color={lightColor} />
              </Box>
            </Tooltip>
  
            <Tooltip hasArrow label="Share on Facebook" placement="top">
              <Box cursor="pointer">
                <BsFacebook size={20} color={lightColor} />
              </Box>
            </Tooltip>
            <Tooltip hasArrow label="Share on Linkedln" placement="top">
              <Box cursor="pointer">
                <BsLinkedin size={20} color={lightColor} />
              </Box>
            </Tooltip>
            <Tooltip hasArrow label="Copy link" placement="top">
              <Box cursor="pointer">
                <BsLink45Deg size={20} color={lightColor} />
              </Box>
            </Tooltip>
            <Tooltip hasArrow label="Save" placement="top">
              <Box cursor="pointer">
                  <BsBookmarkPlus
                    size={20}
                    color={lightColor}
                  />
              </Box>
            </Tooltip>
          </HStack>
        </Flex> 
        
       <Heading  textAlign={"start"} mb="5" > {single?.title}  </Heading>
             <Box width={"100%"} mb="5"> 
                    <Image  
                     w={"100%"}
                    maxH="700px"
                    objectFit="cover"
                     alt="cover"
                   src={single?.pic} />
            </Box>
  
       
              <Box fontSize={"1.2rem"} letterSpacing={2} textAlign={"start"} spacing={5} dangerouslySetInnerHTML={{ __html: single?.content }}/>
         
  
           
        
            
    
      </Box> 
   
     : <Skeltonlist/>


    }
    
    
    </>
  )
}

export default SinglePost