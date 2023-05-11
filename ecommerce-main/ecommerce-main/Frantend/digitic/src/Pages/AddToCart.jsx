import { Box, Button, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useToast } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {deleteadd, getadd} from "../Redux/AddCart/action"
import {RiDeleteBin6Line} from "react-icons/ri"
import BreadcrumbCompnent from '../Components/BreadcrumbCompnent'
import { Link, useLocation } from 'react-router-dom'
const AddToCart = () => {
  const dispatch=useDispatch()
  const location=useLocation()
  const toast=useToast()
  console.log(location,"ck")
  
  const data=useSelector((state)=>state.Addcart.data)
  // console.log(data[0].Price)
  let sum = data.reduce((a,b)=> a + b.Price*b.Quantity,0)

  
  console.log(data)
  
  useEffect(()=>{
    dispatch(getadd)
  },[])

  const handleDel=(id)=>{
  
    dispatch(deleteadd(id))
    toast({
      title:'Item Deleted Successfully',
      position:"top",
      status: 'warning',
      duration: 2000,
      isClosable: true,
    })
  }

  



  return (
    <div>
    <Box ml="45%" mt="-2%" mb="1%" >
      <BreadcrumbCompnent pa={"Your Shopping Cart"} />
    </Box>
    <TableContainer bgColor={"#f5f5f7"}>
  <Table variant='simple'>
    
    <Thead>
      <Tr>
        <Th>PRODUCT</Th>
        <Th>PRICE</Th>
        <Th>QUANTITY</Th>
        <Th>TOTAL</Th>
      </Tr>
    </Thead>
    <Tbody>
    { data && data.map((el)=>{
      
      return(
        <Tr>
        <Td>
          <Box display={"flex"} gap={"5"} key={el._id} >
          <Box><Image w="120px" h="120px" src={el.Images[0]}/></Box>
          <Box mt="3%">
            <Text   size={"s"} textOverflow="ellipsis" wordBreak={"break-all"} fontWeight="bold" >{el.Title}</Text>
            <Text>Size: {el.Size[0]}</Text>
            <Text>Color: {el.Color[0]}</Text>

          </Box>

          </Box>
        </Td>
        <Td>{el.Price}</Td>
        <Box display={"flex"} m="auto" mt="25%" >
          <Box><Td>{el.Quantity}</Td></Box>
          <Box mt="3%" border={"1px solid"} p="3%" borderRadius={"50px"} w="40px" h="40px" bg={"#232F3E"} _hover={{bg:"#FEBD69"}} onClick={()=>handleDel(el._id)} > <RiDeleteBin6Line color="white" fontSize={"25px"}/> </Box>
        
        </Box>
        <Td>{el.Price*el.Quantity}</Td>

      </Tr>
      )
    })}
    </Tbody>
    
  </Table>
</TableContainer>
<Box display={"flex"} justifyContent={"space-between"}>
  <Box mt="5%" ml="4%" w="25%">
  <Link to="/collections/allProducts"> <Button p="7%" w="45%" borderRadius={"35px"} color={"white"} bg={"#232F3E"} _hover={{bg:"#FEBD69"}}>Continue Shopping</Button></Link>
  </Box>
  <Box mt="5%" mr="6%">
    <Text mb="3%" fontFamily={"sans-serif"} fontWeight={"600"} fontSize="20px" >Sutotal:{sum}</Text>
    <Text fontFamily={"sans-serif"} fontWeight={"600"} fontSize="15px" >Taxes and shipping calculated at checkout</Text>
  <Link to="/checkout"><Button mt="5%" p="9%" w="45%" ml="-1%" borderRadius={"35px"} color={"white"} bg={"#232F3E"} _hover={{bg:"#FEBD69"}} >Check Out</Button></Link>
  </Box>
</Box>

    </div>
  )
}

export default AddToCart


