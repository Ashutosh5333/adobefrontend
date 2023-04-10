import React, { useEffect, useState } from 'react'
import { Box, Button, Divider, Input, Text, useToast } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { AddPost } from '../Redux/AppReducer/action';


const CreatePost = () => {
  const dispatch = useDispatch()
const [image,SetImage] = useState("");
const [title,SetTitle] = useState("");
const [url,SetUrl] = useState("");
const [pic,Setpic] = useState("");
const toast = useToast()
const [content,SetContent] = useState("")


  const payload={
     title,
     content,
     pic
  }



   const token = JSON.parse(localStorage.getItem("token"))

  const Imagepost = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "bloguser");
    data.append("cloud_name", "dgvfiwlap");
    fetch("https://api.cloudinary.com/v1_1/dgvfiwlap/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        SetUrl(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = () =>{
      dispatch(AddPost(payload))
      .then((res) => {
        if(res.type ==="ADD_DATA_SUCCESS" && res.payload.msg !== "data created sucessfully" ){
          toast({
            position:"top",
            status : "error",
            title:res.payload.err
           })
         }
         else{
          toast({
            position:"top",
            status : "success",
            title:res.payload.msg
           })
         }
      })
      .catch((err) => {
        console.log(err);
        toast({
          position : 'top',
          colorScheme : 'red', 
          status : "error",
          title:err
        })
      });
  
 }

  

  

  return (
    <>
      <Box  maxH="500px">
         
         <Box width="90vw" m="auto" display="flex" justifyContent={"space-between"} gap="5" mt="10"> 
           <Text fontSize={{base:"1.5rem",md:"1.5rem",lg:"2rem" }} fontWeight={"600"}> Publish A Post </Text>

           <Button p="4"  onClick={handleSubmit}  colorScheme='facebook'  fontSize={"1.2rem"} fontWeight={"600"}> Publish </Button>
         </Box>

         <Divider color={"gray"} width="90vw" m="auto" mt="10" />

       <Box  width="80vw" m="auto"  mt="10">
          <Input variant={"unstyled"} name="title"
           onChange={(e) => SetTitle(e.target.value)}
           fontSize={{base:"1.5rem",md:"1.5rem",lg:"3.4rem" }} placeholder='Title' />
       </Box>

       <Box  width="80vw" m="auto"  mt="10">
          <Input variant={"unstyled"} 
            onChange={(e) => SetContent(e.target.value)}
          name="Content" fontSize={{base:"1.5rem",md:"1.5rem",lg:"2rem" }} placeholder='+ Add a Content' />
       </Box>

       <Box  width="80vw" m="auto"  mt="10">
           
          <Input variant={"unstyled"} name="url"
            
            onChange={(e) => Setpic(e.target.value)}
           fontSize={{base:"1.5rem",md:"1.5rem",lg:"2rem" }} placeholder='+ Add a Image' />
           
       </Box>

    
     </Box>

    </>
  )
}

export default CreatePost