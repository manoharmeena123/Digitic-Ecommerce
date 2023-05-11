import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



import styled from "../Styles/Home.module.css";
import { Box, color, Divider, Image, ScaleFade, Text } from "@chakra-ui/react";



export default function ImageSlider ({data}) {
  

console.log(data,"data")



var settings = {
    dots: true,
    infinite: false,
    // arrows:true,
    // speed: 500,
    // lazyLoad:"progressive",
    // nextArrow:<SampleNextArrow/>,
    // prevArrow:<SampleNextArrow/>,
    // fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // initialSlide: 0,
    
  };
    return (
      <Box w="400px">
        
        <Slider {...settings}>
        {
          data && data.map((el,index)=>{
            return(
            <div>
                <Image w="500px" h="500px" src={el} alt="lap"/>
            </div>

            )
          })
        }
        </Slider>
  </Box>
    );
  }