import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Collect from "../Pages/Collect";

import styled from "../Styles/Home.module.css";
import { Box, Divider, Image, ScaleFade, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {Collection} from "../Redux/Collection/action"
import { useNavigate, useNavigation, useSearchParams } from "react-router-dom";

const data=[
    {
        Title:"BIG SCREEN",
        Heading:"Smart Watch Series 7",
        Text:"From $399 or $16.62/mo for 24 mo.*",
        Image:"https://cdn.shopify.com/s/files/1/0620/5082/8457/files/subbanner-01.jpg?v=1655701528",
    },
    {
        Title:"Studio Display",
        Heading:"600 nits of brightness.",
        Text:"27-inch 5K Retina display",
        Image:"https://cdn.shopify.com/s/files/1/0620/5082/8457/files/subbanner-02.jpg?v=1654920168",
    },
    {
        Title:"smartphones",
        Heading:"Smart Watch Series 7",
        Text:"Smartphone 13 Pro.",
        Image:"	https://cdn.shopify.com/s/files/1/0620/5082/8457/files/subbanner-03.jpg?v=1654920181",
    },
    {
        Title:"home speakers",
        Heading:"Room-filling sound.",
        Text:"From $699 or $116.58/mo. for 12 mo.*",
        Image:"https://cdn.shopify.com/s/files/1/0620/5082/8457/files/subbanner-04.jpg?v=1654920192",
    }

]

export default function ShowSlider () {
  
//  const dispatch=useDispatch()
//  const navigation=useNavigate()
//  const data=useSelector((state)=>state.collection.data)
console.log(data,"data")
 
// useEffect(()=>{
//   dispatch(Collection)

// },[dispatch])

// const handle=(title)=>{
//   <Collect cat={title}/>
//   let cat=title.split(" ").join("_")
//   let Params={}
//   Params.category=cat;
  
//   // setParam(Params)
//   navigation(`/collections/${cat}`)
// }
 
    
var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 984,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 710,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }
      
    ]
  };
    return (
      <Box w="100%" m="2%" mb="1%" >
        
        <Slider {...settings}>
        {
          data && data.map((el,index)=>{
            return(
            
            <div>
          
            <Text position={"absolute"} zIndex="100" fontSize={"20px"} fontWeight={"400"} mt={{base:"1%",lg:"1%",md:"0.5%" }} ml={{base:"2%",lg:"2%",md:"1%" }} color={`${index===0?"white":"black"}`}  >{el.Title}</Text>
            <Text position={"absolute"} zIndex="100" fontSize={{base:"20px",lg:"25px",md:"18px"}} fontWeight={"700"} mt={{base:"4%",lg:"4%",md:"1.5%" }} ml={{base:"2%",lg:"2%",md:"1%" }} color={`${index===0?"white":"black"}`} > {el.Heading} </Text>
            <Text position={"absolute"} zIndex="100" fontSize={{ base:"15px",lg:"17px",md:"12px"}} mt={{base:"7%",lg:"7%",md:"2.5%" }} ml={{base:"2%",lg:"2%",md:"1%" }} fontWeight={"500"} color={`${index===0?"white":"black"}`} > {el.Text} </Text>

            <div className={styled.show_image}  ><img src={el.Image} alt="lap"   /> </div>
      
 
           
          
          </div>

            )
          })
        }
        </Slider>
      </Box>
          
          
          
          
      
    );
  }