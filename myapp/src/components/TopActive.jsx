import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetUserdata } from '../Redux/AuthReducer/action'
import { Avatar, Box, Text } from '@chakra-ui/react'

const TopActive = () => {
  const userdata  = useSelector((store) => store.AuthReducer.userdata)


 const dispatch = useDispatch()

   useEffect(() =>{
     dispatch(GetUserdata)
   },[])
  
    const  user =[]

        if( user.length<5 ){
          user.push(userdata)
        }


  return (
    <>

    {
       user[0].length>0 && user[0].map((el) =>{
        return  <Box  key={el._id} display="flex" justifyContent={"space-between"} gap="5" mt="5" p="4">
      
      <Box >
        <Avatar
          size={{base:"2xl",md:"md", lg:"xl"}}
        //  size="md"
         name={el.name}
        />
      </Box>

     <Box m="auto">
        <Text fontWeight={"600"}  textAlign="center">{el.name} </Text>
     </Box>

    </Box>
   
       })

    }
    
    </>
  )
}

export default TopActive