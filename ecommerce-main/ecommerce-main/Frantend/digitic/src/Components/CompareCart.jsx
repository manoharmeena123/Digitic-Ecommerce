import { Box, Checkbox, Divider, Heading, Image, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaDollarSign } from 'react-icons/fa'
import {RxCross2} from "react-icons/rx"
import { useDispatch } from 'react-redux'
import { deletecompare } from '../Redux/Compare/action'


const CompareCart = ({el}) => {
  var data=el
  const [del,setdel]=useState("")
  const dispatch=useDispatch()
  
 
  useEffect(()=>{
   
    dispatch(deletecompare(del))
    
},[del,dispatch])

  console.log(el)
  return (
    <div>
    
        <Box boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}  p="2">
        <RxCross2 fontSize={"25px"} cursor={"pointer"} onClick={()=>setdel(data._id)} />
          <Image src={data.Images[0]} alt="img" />
          <Heading mt="2%" size={"sm"}>{data.Title}</Heading>
          
          <Box mt="5%" display={"flex"} ><FaDollarSign fontSize={"15px"}  color="#777777"/>
            <Box  mt="-2.5%" ml="1%" fontSize={"20px"} >{data.Price}</Box>
            </Box>
            <Divider />
            
            <Box mt="2%" display={"flex"} justifyContent="space-between">
            <Text fontFamily={"sans-serif"} fontSize="17px" fontWeight={"600"}>Brand:</Text>
            <Text color={"#777777"}>{el.Brand}</Text>
            </Box>

            <Divider />
            
            <Box mt="2%" display={"flex"} justifyContent="space-between">
            <Text fontFamily={"sans-serif"} fontSize="17px" fontWeight={"600"}>Type:</Text>
            <Text color={"#777777"}>{el.Type}</Text>
            </Box>


            <Divider />
            
            <Box mt="2%" display={"flex"} justifyContent="space-between">
            <Text fontFamily={"sans-serif"} fontSize="17px" fontWeight={"600"}>SKU:</Text>
            <Text color={"#777777"}>{el.SKU}</Text>
            </Box>


            <Divider />
            
            <Box mt="2%" display={"flex"} justifyContent="space-between">
            <Text fontFamily={"sans-serif"} fontSize="17px" fontWeight={"600"}>Availability:</Text>
            <Text color={"#777777"}>{el.Availability}</Text>
            </Box>


            <Divider />
            
            <Box mt="2%" display={"flex"} justifyContent="space-between">
            <Text fontFamily={"sans-serif"} fontSize="17px" fontWeight={"600"}>Color:</Text>
            <Box display={"flex"} gap="3" color={"#777777"}>{el.Color.map((e)=>{
                return(
                    <Input cursor={"pointer"} ml="1%" bgColor={e} w="20px" h="30px" borderRadius="50%" />
                )
            })}</Box>
            </Box>

            <Divider />
            
            <Box mt="2%" display={"flex"} justifyContent="space-between">
            <Text  fontFamily={"sans-serif"} fontSize="17px" fontWeight={"600"}>Size:</Text>
            <Box display={"flex"} gap="3" color={"#777777"}>{el.Size.map((e)=>{
                return(
                    <Text>{e}</Text>
                )
            })}</Box>
            </Box>

        </Box>

    </div>
  )
}

export default CompareCart