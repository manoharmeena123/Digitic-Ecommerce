import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import styled from '../../Styles/Collection.module.css'
const Categories = () => {
  return (
    <div>


        <Heading size={"sm"} p="4%">Shop By Categories</Heading>
          <Text className={styled.lefttext} color={"#777777"} fontSize={"12px"} fontWeight={"medium"} pl="5%" >Home</Text>
          <Text className={styled.lefttext} color={"#777777"} fontSize={"12px"} fontWeight={"medium"} pl="5%" >Our Store</Text>
          <Text className={styled.lefttext} color={"#777777"} fontSize={"12px"} fontWeight={"medium"} pl="5%" >Blogs</Text>
          <Text className={styled.lefttext} color={"#777777"} fontSize={"12px"} fontWeight={"medium"} pl="5%" >Contact</Text>
          
        
    </div>
  )
}

export default Categories