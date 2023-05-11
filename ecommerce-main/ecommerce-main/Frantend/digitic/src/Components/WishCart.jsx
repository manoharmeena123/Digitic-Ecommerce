import { Box, Heading, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaDollarSign } from 'react-icons/fa'
import {RxCross2} from "react-icons/rx"
import { useDispatch } from 'react-redux'

import { deletewish } from '../Redux/Wishlist/action'
const WishCart = ({el}) => {
  var data=el
  const [del,setdel]=useState("")
  const dispatch=useDispatch()
  
 
  useEffect(()=>{
   
    dispatch(deletewish(del))
    
},[del,dispatch])

  console.log(el)
  return (
    <div>
    
        <Box boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}  p="2">
        <RxCross2 fontSize={"25px"} cursor={"pointer"} onClick={()=>setdel(data._id)} />
          <Image src={data.Images[0]} alt="img" />
          <Heading mt="2%" size={"sm"}>{data.Title}</Heading>
          
          <Box mt="5%" display={"flex"} ><FaDollarSign fontSize={"15px"}  color="#777777"/>
            <Box  mt="-2.5%" ml="1%" >{data.Price}</Box>
            </Box>

        </Box>

    </div>
  )
}

export default WishCart