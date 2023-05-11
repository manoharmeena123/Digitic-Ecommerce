import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Divider, Grid, GridItem, Heading, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import {AiFillLinkedin} from "react-icons/ai"
import {BsInstagram} from "react-icons/bs"
import {AiOutlineGithub} from "react-icons/ai"
import {AiOutlineYoutube} from "react-icons/ai"
import {FaRegPaperPlane} from "react-icons/fa"
import styled from '../../Styles/Footer.module.css'
const Footer = () => {
  return (
    <div className={styled.container}>
        <div className={styled.topfooter}>
        <div className={styled.icon}><FaRegPaperPlane fontSize={"35"}/><Heading  ml="10px" size={"lg"}>Sign Up for Newsletter</Heading></div>
         <div className={styled.text} > <InputGroup  borderRadius={"10px"} bg={"white"} color="black" >
            <InputLeftElement
           
              pointerEvents='none'
              color='gray.300'
              fontSize='1.2em'
              
            />
            <Input  w="100%" h="45px"  placeholder='Your Email Address' />
            <InputRightElement  w="100px" h="30px" bg="#232F3E" color={"white"} m="6px" mb="3%"  borderRadius={"10px"} p="17px" >Subscribe</InputRightElement>

          </InputGroup></div>
        </div>
        <Divider mt="10px"/>
        <div className={styled.middlefooter}>
        <Grid templateColumns='repeat(4, 1fr)' mt="20px" gap={6}>
          <GridItem >
            <Heading  size={"md"}>Contact Us</Heading>
            <Heading mt="10px" size={"sm"}>Hno:277 NearVill chopal <br/>
            Sonipat,Haryana <br/>
            Pincode:131103</Heading>
            <Heading mt="15px" size={"sm"}>+91 8756423854</Heading>
            <Heading mt="15px" size={"sm"}>atulsah408@gmail.com</Heading>
            <Box display={"flex"} mt="15px" mb="10px" gap="20px">
                <AiFillLinkedin fontSize={"25"}/>
                <BsInstagram fontSize={"25"}/>
                <AiOutlineGithub fontSize={"25"}/>
                <AiOutlineYoutube fontSize={"25"}/>

            </Box>

          </GridItem>
          <GridItem>
            <Heading size={"md"}>Information</Heading>
            <Heading mt="15px" size={"sm"}>Privacy</Heading>
            <Heading mt="15px" size={"sm"}>Refund Policy</Heading>
            <Heading mt="15px" size={"sm"}>Shipping Policy</Heading>
            <Heading mt="15px" size={"sm"}>Terms & Conditions</Heading>
            <Heading mt="15px" size={"sm"}>Blogs</Heading>
            

          </GridItem>
          <GridItem>
          <Heading size={"md"}>Account</Heading>
          <Heading mt="15px" size={"sm"}>About</Heading>
          <Heading mt="15px" size={"sm"}>Faq</Heading>
          <Heading mt="15px" size={"sm"}>Contact</Heading>
          </GridItem>
          
          <GridItem>
          <Heading size={"md"}>Quick Links</Heading>
          <Heading mt="15px" size={"sm"}>Laptops</Heading>
          <Heading mt="15px" size={"sm"}>Headphones</Heading>
          <Heading mt="15px" size={"sm"}>Tablets</Heading>
          <Heading mt="15px" size={"sm"}>Watch</Heading>
          </GridItem>
         </Grid>
        </div>
        <div className={styled.smallmiddlefooter}>
        <Accordion allowToggle>
         <AccordionItem>
           <h2>
             <AccordionButton   >
               <Box  as="span" flex='1' textAlign='left'>
               Contact Us
               </Box>
               <AccordionIcon />
             </AccordionButton>
           </h2>
           <AccordionPanel pb={4}>
           <Heading mt="10px" size={"sm"}>Hno:277 NearVill chopal <br/>
            Sonipat,Haryana <br/>
            Pincode:131103</Heading>
            <Heading mt="15px" size={"sm"}>+91 8756423854</Heading>
            <Heading mt="15px" size={"sm"}>atulsah408@gmail.com</Heading>
            <Box display={"flex"} mt="15px" mb="10px" gap="20px">
                <AiFillLinkedin fontSize={"25"}/>
                <BsInstagram fontSize={"25"}/>
                <AiOutlineGithub fontSize={"25"}/>
                <AiOutlineYoutube fontSize={"25"}/>

            </Box>
           </AccordionPanel>
         </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
              Information
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          <Heading mt="15px" size={"sm"}>Privacy</Heading>
            <Heading mt="15px" size={"sm"}>Refund Policy</Heading>
            <Heading mt="15px" size={"sm"}>Shipping Policy</Heading>
            <Heading mt="15px" size={"sm"}>Terms & Conditions</Heading>
            <Heading mt="15px" size={"sm"}>Blogs</Heading>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
              Account
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          <Heading mt="15px" size={"sm"}>About</Heading>
          <Heading mt="15px" size={"sm"}>Faq</Heading>
          <Heading mt="15px" size={"sm"}>Contact</Heading>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
              Quick Links
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          <Heading mt="15px" size={"sm"}>Laptops</Heading>
          <Heading mt="15px" size={"sm"}>Headphones</Heading>
          <Heading mt="15px" size={"sm"}>Tablets</Heading>
          <Heading mt="15px" size={"sm"}>Watch</Heading>
          </AccordionPanel>
        </AccordionItem>
      
      </Accordion>


        
        </div>
        <Divider/>
        <div className={styled.bottomfooter}>
        <Heading mt="15px" size={"sm"}>@2022 Powered by Developer's Corner</Heading>
        </div>
    </div>
  )
}

export default Footer