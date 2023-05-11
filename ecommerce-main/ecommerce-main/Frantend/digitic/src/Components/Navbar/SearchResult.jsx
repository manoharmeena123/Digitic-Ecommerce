import { Box, Grid, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import styled from "../../Styles/Navbar.module.css"

export const SearchResult = ({ result }) => {
  console.log(result.Title,"result")
  const navigate = useNavigate()
  
  const handletitle=(Title)=>{
    navigate(`/Product/{Title}`)


  }
  return (
    
   
   <div
      className={styled.search_result}
      onClick={(e) =>handletitle(result.Title)}
    >
   
      
        <Image src={result.Images[0]} w="130px" h="130px" alt="img"/>
        <Box>
        <text className={styled.search_Text}>{result.Title}</text>
        <Text mt="15px" fontWeight={"bold"}>{result.Price}</Text>
        </Box>
    
   
    </div>
   
  );
};