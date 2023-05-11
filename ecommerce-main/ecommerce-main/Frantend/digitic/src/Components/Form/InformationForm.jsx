import { Box, Button, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const InformationForm = ({onClick}) => {

  return (
    <Box >
         

            <Heading fontWeight={"normal"} textAlign={"left"} ml="15%" mt="2%" fontSize="20px">Contact Information</Heading>
            <Text textAlign={"left"} ml="15%" mt="2%">atul sahu (atulsahu409@gmail.com)</Text>

            <Heading mr="50%" mb="2%" mt="1%" fontSize={"18px"}>Shipping address</Heading>
<Box w="80%" ml="15%">
            <form>
            <Input p="4%" mb="2%" type={"text"} placeholder='Saved address' />
            <Input  p="4%" mb="2%" type={"text"} placeholder='Country/Region' />
            <Box mb="2%" display={"flex"}>
                <Input   p="4%" type={"text"} placeholder="First name" />
                <Input  p="4%" ml="1%" type={"text"} placeholder="Last name" />
            </Box>
            <Input  p="4%" mb="2%" type={"text"} placeholder='Address' />
            <Input p="4%" mb="2%" type={"text"} placeholder='Apartment,suite,etc' />
            <Box  mb="2%" display={"flex"}>
                <Input  p="4%" type={"text"} placeholder="City" />
                <Input  p="4%" ml="1%" type={"text"} placeholder="Postal code" />
            </Box>
              <Button bg="#e02020" color={"white"}   p="5%" mb="2%" mt="2%" ml="65%" onClick={()=>onClick("InformationForm")} >Continue to Shipping</Button>
            </form>
            </Box>
    </Box>
  )
}

export default InformationForm