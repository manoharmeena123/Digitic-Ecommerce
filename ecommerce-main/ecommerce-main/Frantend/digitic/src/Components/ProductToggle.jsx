import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Checkbox,  Grid, Heading, Image, Input, Select, Tag, Text, Toast, useToast } from '@chakra-ui/react'
import styled from "../Styles/Collection.module.css"
import React, { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaDollarSign } from 'react-icons/fa'
import addcart from "../Images/add-cart.svg"

import compare from "../Images/prodcompare.svg"
import checkimg from "../Images/check.svg"
import ReactStars from 'react-rating-stars-component'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { singledata } from '../Redux/Products/action'
import { deletewish,postwish } from '../Redux/Wishlist/action'
import ModalComponent from './ModalComponent'
import { deletecompare, postcompare } from '../Redux/Compare/action'



const ProductToggle = ({el,grid}) => {
  const data=useSelector((state)=>state.Wishlist.data)
  const datacomp=useSelector((state)=>state.Compare.data)
  console.log(data,"wish",datacomp)

    const [Shown, setIsShown] = useState("true");
    const [check,setcheck]=useState(false)
    const [comp,setcomp]=useState(false)
    const toast =useToast()
    const dispatch=useDispatch()
    const navigate=useNavigate()
    
    let fav=data.some((e)=>e.Title==el.Title)
 
    let comparedata=datacomp.some((co)=>co.Title===el.Title)


    console.log(fav,"fav",comparedata)
    const single=(el)=>{
        dispatch(singledata(el.Title))
        navigate(`/products/${el.Title}`)
        console.log(el,el._id,)
      }

      const addwish=()=>{
        
        setcheck(!check)
        
        if(!check){
          dispatch(postwish(el));
          toast({
            title:'Item Add in Wishlist',
            position:"top",
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
         
        }
        else if(check){
          
          
          dispatch(deletewish(el._id))
          toast({
            title:'Item Remove from Wishlist',
            position:"top",
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
          
        }

        console.log(check)
      }



      const addcomp=()=>{
        
        setcomp(!comp)
        
        if(!comp){
          
          
          
         
          dispatch(postcompare(el))
          toast({
            title:'Item Add in Comparelist',
            position:"top",
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
          
        }
        else if(comp){
          
          
          dispatch(deletecompare(el._id))
          toast({
            title:'Item Remove from Comparelist',
            position:"top",
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
          
        }

        console.log(comp)
      }





  return (

          <div className={`${grid==1?(styled.card1):(styled.card)}`} key={el._id} >
                <Box display={"flex"} >
                  <Image w="90%" mt={`${grid==1?"-5%":"10%"}`}    h="250px" src={`${Shown?el.Images[0]:el.Images[1]}`}  onMouseEnter={() => setIsShown(false)} onMouseLeave={() => setIsShown(true)} onClick={()=>single(el)} />                
                    <Box position={"relative"} zIndex="100" mt={`${grid==1?"-10%":""}`} >
                      <AiFillHeart  fontSize={"25px"}  className={`${ fav || check ?(styled.hearticonred):(styled.hearticonblack)}`} onClick={addwish} />
                      <Box overflow={'hidden'} className={styled.icon}>
                      <Image src={`${comparedata || comp ?checkimg:compare}`} mt="10px" fontSize={"25px"} _hover={{bgColor:"#ffd700"}} p="5%" ml="-5%" borderRadius={"10px"} onClick={addcomp} />
                      

                      <ModalComponent el={el}/>
                      
                      <Image src={addcart} mt="10px" fontSize={"25px"} _hover={{bgColor:"#ffd700"}} p="5%" ml="-5%" borderRadius={"10px"} />
                  </Box>
                  </Box>
                    
                </Box>
                
                <div className={styled.card_information__wrapper} >
                  <div className={styled.card_caption}>{el.Brand}</div>
                  <div className={styled.card_information__text}>{el.Title}</div>
                  <ReactStars
                     count={5}
                     size={24}
                     value={el.Rating}
                     edit={false}
                     activeColor="#ffd700"
                    />
                    <div className={`${grid==1?(styled.card_caption_des):(styled.card_caption_des_none)}`}>{el.Discription}</div>
                  <Box display={`${grid==1?"none":"flex"}`} >
                    <Box mt={"5px"}><FaDollarSign fontSize={"15px"}  color="#777777"/></Box>
                    <div className={styled.price}>{el.Price}</div>
                  </Box>
                </div>
                </div> 
  )
}

export default ProductToggle