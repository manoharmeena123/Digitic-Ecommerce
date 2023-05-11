import { Box, Button, Image, Text } from '@chakra-ui/react'
import styled from '../Styles/Home.module.css'
import React from 'react'

const BlogCard = ({el}) => {
  return (
    <Box m="2%" p="1%" >
    <Box key={el.Title} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} borderRadius={"15px"} h="auto">
        <div className={styled.Blogimg}>
            <img src={el.Image} alt="imag" />
        </div>
        <Box textAlign={"left"} ml="3%">
            <Text mt="2%">{el.Date}</Text>
            <div className={styled.BlogsTitle}>
                {el.Title}
            </div>
            <div className={styled.BlogsDis}>
                {el.Discription}
            </div>
            <Button bgColor={"#232F3E"} color="white" borderRadius={"20px"} p="4%" _hover={""} m="4% 0" >READ MORE</Button>
        </Box>

    </Box>

    </Box>
  )
}

export default BlogCard