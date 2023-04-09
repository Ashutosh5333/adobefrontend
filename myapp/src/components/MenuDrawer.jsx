import React from 'react'
import {Drawer, DrawerBody,DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure,  Avatar, Flex, Text  } from '@chakra-ui/react'
import { CiUser } from "react-icons/ci";
import { BsBookmarks } from "react-icons/bs";
import { RiFileList2Line,RiStarSFill } from "react-icons/ri";
import { IoMdStats } from "react-icons/io";
import { Link } from 'react-router-dom';


const MenuDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

   const data = JSON.parse(localStorage.getItem("data"))
 

   const handleLogOut = () =>{
       localStorage.clear()
       window.location.reload()
   }


  return (
    <>
       <Avatar ref={btnRef} size={"sm"} 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3dAr4nnYucbZaV3JyyKl_htTZUwmyk-h9fYh33dwBDA&s"
     colorScheme='teal' onClick={onOpen}>
       
     </Avatar>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
         
          <DrawerBody>
          <Link to="/profile">
              <Flex alignItems="center" mb="20px" gap="10px" color="rgba(117, 117, 117, 1)" cursor="pointer">
                  <CiUser size="1.5em"/>
                  <Text fontSize={"1.2rem"} fontWeight="500">Profile</Text>
              </Flex>
            </Link>
              <Flex alignItems="center" mb="20px" gap="10px" color="rgba(117, 117, 117, 1)" cursor="pointer">
              <BsBookmarks size="1.5em"/>
                 <Link to="/user">

                <Text fontSize={"1.2rem"} fontWeight="500">Users Lists</Text>
                 </Link>

              </Flex>
              <Flex alignItems="center" mb="20px" gap="10px" color="rgba(117, 117, 117, 1)" cursor="pointer">
                <RiFileList2Line size="1.5em"/>
                <Text fontSize={"1.2rem"} fontWeight="500">Stories</Text>
              </Flex>
              <Flex alignItems="center" mb="20px" gap="10px" color="rgba(117, 117, 117, 1)" cursor="pointer">
                <IoMdStats size="1.5em"/>
                <Text fontSize={"1.2rem"} fontWeight="500">Stats</Text>
              </Flex>
              <hr/>
              <Text fontSize={"1.2rem"} fontWeight="500" mt="15px" mb="20px" color="rgba(117, 117, 117, 1)" cursor="pointer">Settings</Text>
              <Text fontSize={"1.2rem"} fontWeight="500" mb="20px" color="rgba(117, 117, 117, 1)" cursor="pointer">All Users</Text>
              <Text fontSize={"1.2rem"} fontWeight="500" mb="20px" color="rgba(117, 117, 117, 1)" cursor="pointer">Privacy And security</Text>
              <hr/>
              <Flex alignItems="center" gap="70px">
                <Text fontSize={"1.2rem"} fontWeight="500" mt="15px" mb="20px" color="rgba(117, 117, 117, 1)" cursor="pointer">Ads</Text>
                <RiStarSFill size="1.3em" color="#FFD700"/>
              </Flex>
              <Text fontSize={"1.2rem"} fontWeight="500" mb="20px" color="rgba(117, 117, 117, 1)" cursor="pointer">You activity</Text>
              <Text fontSize={"1.2rem"} fontWeight="500" mb="20px" color="rgba(117, 117, 117, 1)" cursor="pointer">Terms</Text>
              <hr/>
              <Text fontSize={"1.2rem"} fontWeight="500" onClick={handleLogOut} mt="15px" mb="20px" color="rgba(117, 117, 117, 1)" cursor="pointer">Sign out</Text>
              <Text fontSize={"1.2rem"} fontWeight="500" mb="20px" color="rgba(117, 117, 117, 1)" cursor="pointer">{data?.email} </Text>
        
          </DrawerBody>

        
        </DrawerContent>
      </Drawer>
    
    </>
  )
}

export default MenuDrawer