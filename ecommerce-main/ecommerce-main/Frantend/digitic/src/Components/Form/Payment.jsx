import { Box, Button, Divider, Heading, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'

const Payment = () => {
  return (
    <Box>
    <Box  w="80%" ml="13%" mt="4%"  border={"1px solid "}  p="2%" borderRadius={"10px"}>
    <Box   display={"flex"} p="1%" justifyContent={"space-between"}>
         <Text>Conact</Text>
         <Text>atulsahu409gmail.com</Text>
         <Text>Change</Text>
    </Box>
         <Divider/>
    <Box  display={"flex"}  p="1%" justifyContent={"space-between"}>     
         <Text>Ship to</Text>
         <Text> 1136,BRIJ BIHAR COLONY, JHANSI, DADIYAPURA,
            JHANSI KHAS, near sun rise public school, Jhansi, Saudi Arabia</Text>
        <Text>Change</Text>
     </Box>
     <Divider/>
    <Box  display={"flex"}  p="1%" justifyContent={"space-between"}>     
         <Text>Method</Text>
         <Text> Standard 524</Text>
        <Text></Text>
     </Box>
     </Box>
     <Heading mt="3%" mr="65%" size={"sm"}>Payment</Heading>
     <Text mt="1%" mr="34%" >All transactions are secure and encrypted.</Text>
     <Box w="80%" ml="13%"  mt="4%" mb="3%" border={"1px solid "}  borderRadius={"5px"}>
        <Box display={"flex"} p="3%" justifyContent={"space-between"}>
            <Text>Standard</Text>
            <Image src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/bc622ea1d8b6ef9238a84480d106ed82.svg"/>
        </Box>
        <Divider />
        <Box w="100%"  bg={"#f3f2f2"} p="3%">
        <Input mt="2%" bg="white" placeholder='Card number'/>
        <Input mt="2%" bg="white" placeholder='Cardholder name'/>
        <Box mt="2%" display={"flex"}>
        <Input bg="white" placeholder='Expiration date (MM/YY)'/>
        <Input ml="1%" bg="white" Security code />

        </Box>


        </Box>
     </Box>
     <Button bg="#e02020" color={"white"}  type="submit" p="4%" mb="2%" mt="2%" ml="70%" >Pay now</Button>
     </Box>
  )
}

export default Payment