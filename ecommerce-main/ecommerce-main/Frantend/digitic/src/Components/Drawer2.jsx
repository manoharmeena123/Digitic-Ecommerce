import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, Heading, Image, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Stack, Textarea, useDisclosure } from "@chakra-ui/react"
import React from "react"
import { useSelector } from "react-redux"
import {Link} from "react-router-dom"
// import {GiHamburgerMenu} from "react-icons/gi"
// import {TbBusinessplan} from "react-icons/tb"
// import {CgShutterstock} from "react-icons/cg"
import styled from "../Styles/Navbar.module.css"
const DrawerComponent= ({cart,pa})=>{
      const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
  
    return (
      <>
        <Button colorScheme=''m="auto"  onClick={onOpen}>
          
        
          <Button color={"white"} bg={"#232f3e"} _hover={{bg:"#febd69"}}>Filter And Sort</Button>
          
        </Button>
        <Drawer
          
          isOpen={isOpen}
          placement='left'
          initialFocusRef={firstField}
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent  >
            <DrawerCloseButton placement='left' fontSize={"25px"} mt="4%" mr="82%" />
            <DrawerHeader borderBottomWidth='1px' textAlign={"center"} fontSize={"14px"} color={"#777777"} >
              
                         Filter And Sort <br/> products
            </DrawerHeader>
  
            <DrawerBody>
              <Stack spacing='24px'>
                <Box display={"flex"}>
                
                </Box>
  
                <Box display={"flex"}>
         
                </Box>
  
                <Box>
                  
                </Box>
  
                <Box>
                  
                </Box>
              </Stack>
            </DrawerBody>
  
           
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default DrawerComponent