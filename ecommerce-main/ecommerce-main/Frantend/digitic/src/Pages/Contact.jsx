import { Box, Button, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import {BiInfoCircle, BiPhoneCall} from "react-icons/bi"
import Iframe from 'react-iframe'
const Contact = () => {
  return (
    <Box mt="-3%" bgColor={"#f2f2f2"}>
        <Box>
        <Iframe 
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6986.771103663534!2d76.99275607711007!3d28.886888929272477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da5e51463d4c9%3A0xe5a485e2ac7c3d4a!2sMandaura%2C%20Haryana%20131103!5e0!3m2!1sen!2sin!4v1669909087902!5m2!1sen!2sin"
            // position="absolute"
              width="100%"
              

              height="550"
              styles={{margin: "1px",padding:"1%",}}
              className="border-0 w-100"
              allowFullScreen="fullscreen"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" />

        </Box>
        <Box display={{lg:"flex"}} bgColor="white" m="1%" boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px">
            <Box>
                <Heading m="2%" >Contact</Heading>
                <Input w="90%" p="3%" m="2%"  bgColor={"#f2f2f2"}   placeholder='Name' type="text" _focus={{outline:"none"}} />
                <Input w="90%" p="3%" m="2%" bgColor={"#f2f2f2"} _focus={{outline:"none"}} placeholder='Email *' type="text" />
                <Input w="90%" p="3%" m="2%" bgColor={"#f2f2f2"} _focus={{outline:"none"}} placeholder='Phone Number' type="text" />
                <Input w="90%" p="5%" m="2%" bgColor={"#f2f2f2"} _focus={{outline:"none"}} placeholder='Comment' type="text" />
                <Button m="2%" p="3%"  borderRadius={"35px"} color={"white"} bg={"#232F3E"} _hover={{bg:"#FEBD69"}} >Send</Button>

            </Box>
            <Box>
                <Heading size={"lg"} m="5%" >Get In Touch With Us</Heading>
                <Box m="5%">
                <Box display={"flex"}>
                    <AiOutlineHome color={"#777777"} fontSize={"22px"}/>
                    <Text ml="%" color={"#777777"}>
                        Hno:277 , Near village chopal , Mandaura, Sonipat,
                        Haryana
                    </Text>
                </Box>
                <Box mt="2%" display={"flex"}>
                    <BiPhoneCall color={"#777777"} fontSize={"22px"}/>
                    <Text ml="%" color={"#777777"}>
                    (+91)7-723-4608
                    </Text>
                </Box>
                <Box mt="2%" display={"flex"}>
                    <AiOutlineMail fontSize={"22px"} color={"#777777"}/>
                    <Text ml="%" color={"#777777"}>
                    demo@company.com
                    </Text>
                </Box>
                <Box mt="2%" display={"flex"}>
                <BiInfoCircle fontSize={"22px"} color={"#777777"}/>
                    <Text ml="%" color={"#777777"}>
                        Monday – Friday 10 AM – 8 PM
                    </Text>
                </Box>
            </Box>
            </Box>
        </Box>

    
    </Box>
  )
}

export default Contact