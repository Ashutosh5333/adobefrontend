import React, { useEffect } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Box, Heading, Stack, StackDivider, Avatar, ButtonGroup, Button } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { DeletePost, GetUserdata } from '../Redux/AuthReducer/action';
import { CiEdit } from 'react-icons/ci';
import { MdAutoDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';



const AllUser = () => {
   const userdata  = useSelector((store) => store.AuthReducer.userdata)
    console.log(userdata)

   const dispatch = useDispatch()

     useEffect(() =>{
       dispatch(GetUserdata)
     },[])

     const handledelete = (_id) =>{
          dispatch(DeletePost(_id))
          .then((res) =>{
            console.log(res)
          })
          .catch(err=>{
            console.log(err)
          })
     }
   


  return (
    <>
  
        <Card >
  <CardHeader>
    <Heading size='md'>User Details</Heading>
  </CardHeader>

  <CardBody>
    {userdata.length >0 && userdata.map((el) =>{
        return   <Stack key={el._id} divider={<StackDivider />} spacing='6' >

<Box  mt="4">
  <Avatar
    size="xl"
      name={el.name}
      src={el.pic}
  />
  <Heading size='xs'  textTransform='uppercase'>
  {el.name}
  </Heading>
  <Text pt='2' fontSize='sm'>
    {el.email}
  </Text>
 
         <ButtonGroup spacing="4" mt="4" justifyItems={"center"}>
             <Link to={`/UserEdit/${el._id}`} >
              <Button>View</Button>
             </Link>

             <Link to={`/UserEdit/${el._id}`}>
              <Button variant="ghost" leftIcon={<CiEdit />}>
                Edit
              </Button>
             </Link>

              <Text textAlign={"center"} m="auto">
                <MdAutoDelete  onClick={() => handledelete(el._id)} />
              </Text>
            </ButtonGroup>

</Box>

</Stack>
    })



    }
    
  </CardBody>
</Card>


     
   
    </>
  )
}

export default AllUser