import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from '../Styles/CheckOut.module.css'
import { getadd } from '../Redux/AddCart/action'
import { Box, Button, Divider, Heading, Image, Input, Select, Text } from '@chakra-ui/react'
import {Link}  from  "react-router-dom"
import InformationForm from '../Components/Form/InformationForm'
import Shipping from '../Components/Form/Shipping'
import Payment from '../Components/Form/Payment'
const CheckOut = () => {
    
    const dispatch=useDispatch()
    const [arr,setarr]=useState([])
    const [selectedCard, setSelectedCard] = useState(1);
    const data=useSelector((state)=>state.Addcart.data)
    let sum = data.reduce((a,b)=> a + b.Price*b.Quantity,0)
    let shipping=17
    let total=sum+shipping
console.log(data)
    useEffect(()=>{
        dispatch(getadd)
    },[])

    const handleClick=(e)=>{
        if(!arr.includes(e)){
            setarr([...arr,e])
        }
        
        alert(e)
    }
    let cardComponent
    switch (selectedCard) {
            case 1:
              cardComponent = <InformationForm/>;
              break;
            case 2:
              cardComponent = <Shipping/>;
              break;
            case 3:
              cardComponent = <Payment/>;
              break;
            default:
              cardComponent = <InformationForm/>;
              break;
          }
    return (
    <div>
        <div className={styled.Container}>
            <div className={styled.RightContainer}>
            <Heading textAlign={"left"} ml="15%" fontWeight={"light"} mt="4%">Digitic</Heading>
            
            <Box display={"flex"} textAlign={"left"} ml="15%" mt="2%">
            <Link to="/addtocart"><Text>Cart</Text></Link>
            <Text onClick={() => setSelectedCard(1)}> > Information</Text>
            <Text onClick={() => setSelectedCard(2)}> > Shipping</Text>
            <Text onClick={() => setSelectedCard(3)}> > Payment</Text>
            </Box>

           
            {cardComponent}
            </div>
            <div className={styled.LeftContainer}>
            {
                data && data.map((el)=>{
                    return(
                        <Box>
                        <Box display={"flex"} justifyContent="space-between" >
                        <Box><Image w="120px" h="120px" p="2%" borderRadius={"20px"} m="3% 3% 3% 1%" src={el.Images[0]} /></Box>
                        <Box textAlign={"left"}  mt="4%">
                            <Text fontWeight={"bold"}  >{el.Title}</Text>
                            <Text>{el.Size[0]}/{el.Color[0]}</Text>
                        </Box>
                        <Box  m="3%" mt="4%">
                            <Text fontWeight={"bold"}    >{el.Price}</Text>
                        </Box>
                            
                        </Box>
                        
                        
                        </Box>
                        
                    )
                })
            }
            <Divider/>
            <Box p="4%" >
                <Box mb="2%" display={"flex"} justifyContent="space-around">
                    <Text fontSize={"18px"} fontWeight="600">Subtotal:</Text>
                    <Text>{sum}</Text>
                </Box>
                <Box display={"flex"} justifyContent="space-around">
                    <Text fontSize={"18px"} fontWeight="600">Shipping:</Text>
                    <Text>17</Text>
                </Box>
            </Box>
            <Divider/>
            <Box display={"flex"} justifyContent="space-around">
                <Text fontSize={"20px"} fontWeight="700">Total</Text>
                <Text fontSize={"23px"} fontWeight="800" >{total}</Text>
            </Box>

            </div>
        </div>
    </div>
  )
}

export default CheckOut


