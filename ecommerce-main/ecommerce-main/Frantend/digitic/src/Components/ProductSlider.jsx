import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Collect from "../Pages/Collect";

import styled from "../Styles/Home.module.css";
import { Box, Divider, Image, ScaleFade, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate, useNavigation, useSearchParams } from "react-router-dom";
import { Productdata } from "../Redux/Products/action";
import ProductToggle from "./ProductToggle";



export default function ProductSlider ({title}) {
  console.log(title,"pro")
  
 const dispatch=useDispatch()

 const data=useSelector((state)=>state.Product.Product)
console.log(data,"data")
 
useEffect(()=>{
  dispatch(Productdata(title))

},[dispatch,title])


 
    
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
      <Box  w="100%" m="2%" mb="1%"  >
      
        <Box  >
        <Slider {...settings}>
        {
          data && data.map((el,index)=>{
            return(
            
            
             
            <ProductToggle el={el}/>
            

            )
          })
        }
        </Slider>
        {/* </Box> */}
        </Box>
      </Box>
          
          
          
          
      
    );
  }