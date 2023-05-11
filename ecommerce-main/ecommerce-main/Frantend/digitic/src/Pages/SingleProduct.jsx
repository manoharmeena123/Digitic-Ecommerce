import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Divider, Grid, Heading, Image, Input, Text, Textarea, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { AiFillHeart, AiFillLinkedin, AiOutlineGithub, AiOutlineYoutube } from 'react-icons/ai';
import { FaDollarSign } from 'react-icons/fa';
import ReactImageZoom from "react-image-zoom";
import compare from "../Images/prodcompare.svg"
import ReactStars from 'react-rating-stars-component';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { singledata } from '../Redux/Products/action';
import styled from "../Styles/SingleProduct.module.css";
import { BsInstagram } from 'react-icons/bs';
import BreadcrumbCompnent from '../Components/BreadcrumbCompnent';
import { getadd, postadd } from '../Redux/AddCart/action';
const SingleProduct = () => {
  const [check,setcheck]=useState(true)
  const [Quantity,setQuantity]=useState(1)
  const {title}=useParams()
  console.log(title)
  // const location=useLocation()
  const dispatch=useDispatch()
  // const navigate=useNavigate()
  const toast=useToast()
  const obj =useSelector((state)=>state.Product.singledata) 
  
    
  const {isError,IsLoading} =useSelector((state)=>state.Product)  

 const [load,setload]=useState(true)
    
const handleadd=()=>{
  console.log("post",obj)
  obj.Quantity=Quantity
  dispatch(postadd(obj))
  toast({
    title:'Item Add Successfully',
    position:"top",
    status: 'success',
    duration: 2000,
    isClosable: true,
  })
  
  
}
  // useEffect(()=>{
  
  // },[obj,dispatch])



   const getdata=()=>{
      dispatch(singledata(title))
      
    }    

    useEffect(()=>{
      
      getdata()
      
    },[])

  useEffect(()=>{
    if(obj._id){
      setload(false)
    }

  },[obj])
  
  console.log(isError,IsLoading)

    
    const addwish=(index)=>{
      console.log(index)
      check?setcheck(false):setcheck(true)
      console.log(check)
    }
  

    if(load){
      return(<div>load.........</div>)
    }
   
console.log(obj)  
let qty=obj?.Availability

  
  
    
    console.log("single",title);
  return (
    <>
    <Box mt="-2%" mb="2%" ml="35%">
      <BreadcrumbCompnent pa={title}/>
    </Box>
    <div className={styled.Container}>
    {
      IsLoading?"load............":""
    }
    
      <div className={styled.rightContainer}>
        <div className={styled.ImageContainer}>
        <div className={styled.ZoomImage}>
        <div>
            <ReactImageZoom {...{ 
                width: 590,
                height: 600,
                zoomLensStyle:"opacity: 0",
                zoomPosition:"original",
                zoomWidth: 600,
                zoomStyle:"background-color:white",
                img:obj?.Images[0], 
                }} />
            </div>
          </div>
          <Grid ml="1%"  mr="1%" mt="5%" gridTemplateColumns={"repeat(2,1fr)"} gap="3">
            <div className={styled.smallimage}><Image src={obj.Images[0]} /></div>
            <div className={styled.smallimage}><Image src={obj.Images[1]} alt="img1" /></div>
            <div className={styled.smallimage}><Image src={obj.Images[2]} alt="img1" /></div>
            <div className={styled.smallimage}><Image src={obj.Images[3]} alt="img1" /></div>

            
            
            
            

          </Grid>
        </div>
      </div>
    <div className={styled.leftContainer}>
      <Heading m="1% 10%" size="md" >{obj.Title}</Heading>
      <Divider/>
      <Box display={"flex"} >
        <Box m={"5px"} ml="2%" ><FaDollarSign fontSize={"15px"}  color="black"/></Box>
          <div className={styled.price}>{obj.Price}</div>
        </Box>
       <Box ml={"4"}> <ReactStars
          count={5}
          size={20}
          value={obj.Rating}
          edit={false}
          activeColor="#ffd700"
        />
        <Text color={"#777777"} fontSize={"14px"} >Write a review</Text>
        <Divider/>
        <Box mt="2%" display={"flex"}><Heading size={"sm"}>Type:</Heading><Text color={"#777777"} fontSize={"14px"}>{obj.Type}</Text></Box>
        <Box mt="2%" display={"flex"}><Heading size={"sm"}>Brand:</Heading><Text color={"#777777"} fontSize={"14px"}>{obj.Brand}</Text></Box>
        <Box mt="2%" display={"flex"}><Heading size={"sm"}>Categories:</Heading>{obj.Categories.map((el)=>{
          return(
            <Text color={"#777777"} fontSize={"14px"}>{el}  , </Text>
          )
        })}</Box>
        
        <Box mt="2%" display={"flex"}><Heading size={"sm"}>Tags:</Heading>{obj.Tags.map((el)=>{
          return(
            <Text color={"#777777"} fontSize={"14px"}>{el}  , </Text>
          )
        })}</Box>

        <Box mt="2%" display={"flex"}><Heading size={"sm"}>SKU:</Heading><Text color={"#777777"} fontSize={"14px"}>{obj.SKU}</Text></Box>
        <Box mt="2%" display={"flex"}><Heading size={"sm"}>Availability:</Heading><Text color={"#777777"} fontSize={"14px"}>{obj.Availability} in Stock</Text></Box>
        
        <Box display={"flex"} mt="2%"><Heading size={"sm"}>Size:</Heading>{obj.Size.map((el)=>{
          return(
            
              <Text  color={"#777777"} boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}  p="1%" fontSize={"17px"} ml="2%">{el}  </Text>
            
            )
        })}</Box>
        <Box mt="2%" display={"flex"}><Heading size={"sm"}>Color:</Heading>{obj.Color.map((el)=>{
          return(
            <Input width={"5%"} h="30px" ml="2%" border="2px solid  blue"   borderRadius={"50%"} bg={el}/>
          )
        })}</Box>

        <Box mt="2%" display={"flex"}><Heading size={"sm"}>Quantity:</Heading>
        <Grid gridTemplateColumns={"repeat(2,1fr)"} ml="5%" boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}   w="9%"  h="5%"  >
        <Box mt="9px" ml="8px">{Quantity}</Box>
        <Box w="-15%" >
          <button className={styled.btn1} disabled={Quantity>=qty} onClick={()=>{setQuantity((add)=>add+1)}}>+</button>
          <button className={styled.btn2} disabled={Quantity<=1} onClick={()=>{setQuantity((add)=>add-1)}}>-</button>
        </Box>
        </Grid>
        </Box>
        <Box display={"flex"} mt="3%" gap={"15%"} >
          <Button ml="10%"  borderRadius={"20px"} color={"white"} bg={"#232F3E"} _hover={{bg:"#FEBD69"}} onClick={()=>handleadd(obj)}>ADD TO CART</Button>
          {/* <Button borderRadius={"20px"} color={"white"} bg={"#FEBD69"} _hover={{bg:"#232F3E"}}>Buy it compare</Button> */}

        </Box>
        
        <Box mt="3%" display={"flex"}>
          <Box w="20%" display={"flex"} >
            <AiFillHeart fontSize={"25px"}  className={`${check?(styled.hearticonblack):styled.hearticonred}`} onClick={()=>addwish(obj._id)} />
            <Text mt="3%" ml="1%" fontSize={"15px"}  color="#777777">Add to wishlist</Text>
          </Box>
          <Box w="20%" display={"flex"} ml="4%">
          <Image mt="6px" src={compare} fontSize={"25px"}  />
            <Text mt="3%" ml="2%" fontSize={"15px"} color="#777777">Add to compare</Text>
          </Box>
        </Box>
        

        <Box>
        <Accordion  allowToggle mt="2%">
         <AccordionItem>
           <h2>
             <AccordionButton   >
               <Box  as="span" flex='1' textAlign='left'>
               Shipping & Return
               </Box>
               <AccordionIcon />
             </AccordionButton>
           </h2>
           <AccordionPanel pb={4}>
           <Heading size="xs" color={"#777777"}>Free shipping and returns available on all orders! <br/>
              We ship all US domestic orders within <span style={{fontWeight:"bolder"}} > 5-10 business days!</span></Heading>
           </AccordionPanel>
         </AccordionItem>
         
         <AccordionItem>
           <h2>
             <AccordionButton   >
               <Box  as="span" flex='1' textAlign='left'>
                Care Instructions
               </Box>
               <AccordionIcon />
             </AccordionButton>
           </h2>
           <AccordionPanel pb={4}>
           <Heading size="xs" color={"#777777"}>Use a soft damp cloth and a drop of mild soap to remove any haze. Air dry.</Heading>
           </AccordionPanel>
         </AccordionItem>
         </Accordion>
        </Box>
        </Box>

    </div>
    </div>
    <div className={styled.bottomContainer}>
    <Heading>Description</Heading>
    <div className={styled.bottomContainerdes}>
      <div className={styled.bottomdes}>{obj.Discription}</div>
    </div>


    <div className={styled.Review}>
      <div>
        <Heading>Reviews</Heading>
      </div>
      <div>
      <Accordion   allowMultiple w="200%">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
               Customer Reviews
              <Box> <ReactStars
                  count={5}
                  size={20}
                  value={obj.Rating}
                  edit={false}
                  activeColor="#ffd700" 
                />
                <span>Based on 1 review</span></Box>  
              </Box>
              <Text>Write a review</Text>

            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Heading color={"#777777"} size={"md"}>Write A Review</Heading>
            <label style={{color:"#777777"}}>Name</label>
            <Input placeholder="Enter your name" />
            <label style={{color:"#777777"}}>Email</label>
            <Input placeholder="Enter your email" />
            <label style={{color:"#777777"}} >Review Title</label>
            <Input placeholder="Give your review a title" />
            <label style={{color:"#777777"}} >Body of Review (1500)</label>
            <Textarea placeholder="Write your comments here" />
            <Button mt="3%" borderRadius={"20px"} color={"white"} bg={"#232F3E"} _hover={{bg:"#FEBD69"}}>Submit Review</Button>
          </AccordionPanel>
        </AccordionItem>
        </Accordion>
      </div>
    </div>
    </div>

    
  
  
  </>
  )
}

export default SingleProduct