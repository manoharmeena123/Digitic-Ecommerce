import { Box, Button, Divider, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Shipping = () => {
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
     </Box>
     <Heading mt="3%" mr="50%" size={"md"}>Shipping method</Heading>
     <Box w="80%" ml="13%"  mt="4%" mb="3%" border={"1px solid "} p="2%" borderRadius={"10px"}>
     <Box display={"flex"} p="1%" justifyContent={"space-between"}>
        <Text>Standard</Text>
         <Text>524</Text>
    </Box>
     </Box>
     <Button bg="#e02020" color={"white"}  type="submit" p="4%" mb="2%" mt="2%" ml="55%" >Continue to payment</Button>



    </Box>
  )
}

export default Shipping