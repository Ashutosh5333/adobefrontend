import {  Avatar,  Box,  Button,  ButtonGroup,Divider,  Heading,  Image,   Stack,  Text,  Wrap,  WrapItem, useToast,} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { AiOutlineLike } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { MdAutoDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { DeletePost, getAllPostData } from "../Redux/AppReducer/action";
import {Link} from "react-router-dom"
import { UserSkeltonlist } from "../pages/Userprofile/UserSkeltonlist";

    

const Dashboard = () => {
  const dispatch = useDispatch()
    const toast = useToast();
   const AllPostlist = useSelector((store) =>store.AppReducer.PostData)
    // console.log(AllPostlist)   

   useEffect(() =>{
     dispatch(getAllPostData)
   },[])

   const handledelete = (_id) =>{
    dispatch(DeletePost(_id))
    .then((res) =>{
      // console.log(res)
        if(res.type === "DELETE_DATA_SUCCESS"){
          toast({
            position: "top",
            status: "success",
            title: res.type,
          });
        }else{
          toast({
            position: "top",
            status: "success",
            title: res.type,
          });
        }
      
    })
    .catch((err) =>{
      console.log(err)
      toast({
        position: "top",
        status: "success",
        title: err,
      });
    })
}



  return (
    <>
    {
      
      AllPostlist.length > 0 ?


     AllPostlist.length >0 && AllPostlist.map((el) =>{
      return   <Box key={el._id} width={"100%"} border={"1px solid gray"} gap="10" mb="10">
        <Card  maxW={{base:"2xl", md:"4xl",lg:"4xl"}}  m="auto">
          <CardBody>
            <Box display={"flex"} gap="5" p="4">
              <Wrap>
                <WrapItem>
                  <Avatar
                    m="auto"
                    size={{ base: "md", md: "md", lg: "md" }}
                    name={el.postedby.name}
                  />
                </WrapItem>
              </Wrap>
              <Box justifyContent={"center"} display={"flex"} gap="5">
                <Text m="auto" mt="3" fontWeight={"600"}>
                    {el.postedby.name}
                </Text>
                <Text m="auto" mt="3">
                {new Date(el.createdAt).toDateString()}
                </Text>
              </Box>
            </Box>

            <Image
              objectFit="cover"
              src={el.pic}
              alt="PostImage"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md"  letterSpacing={1} textAlign={"start"} fontFamily={"playfair"}>{el.title}</Heading>
              <Text noOfLines={3}  textAlign={"start"} fontSize={{base:".8rem",md:"1rem",lg:"1rem" }} letterSpacing={2} >
                {el.content}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter >
            <ButtonGroup spacing="2" justifyItems={"center"}>
             <Link to={`/Allpost/${el._id}`} >
              <Button>View</Button>
             </Link>

              <Button flex="1" variant="ghost" leftIcon={<AiOutlineLike />}>
                Like
              </Button>

             <Link to={`/Edit/${el._id}`}>
              <Button variant="ghost" leftIcon={<CiEdit />}>
                Edit
              </Button>
             </Link>

              <Text textAlign={"center"} m="auto">
                <MdAutoDelete  onClick={() => handledelete(el._id)} />
              </Text>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Box>

     })
     : <UserSkeltonlist />

    }
    
    </>
  );
};

export default Dashboard;
