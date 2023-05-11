import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from "../Styles/Home.module.css"
import brand  from "../Images/brand-01.png"
import brand1 from "../Images/brand-02.png"
import brand2 from "../Images/brand-03.png"
import brand3 from "../Images/brand-04.png"
import brand4 from "../Images/brand-05.png"
import { Box, Heading, Image } from "@chakra-ui/react";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      autoplay: true,
      autoplaySpeed: 3000,
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
      <div className={styled.Brandslider}>
        
        <Slider {...settings}>
        <div className={styled.Brand}>
        
            <Image  src={brand} alt="Brand"/>
        

        </div>
        <div className={styled.Brand}>
        
            <Image  src={brand1}  alt="Brand"/>
        

        </div>
        <div className={styled.Brand}>
        
            <Image  src={brand2} alt="Brand"/>
        

        </div>
        <div className={styled.Brand}>
        
            <Image  src={brand3}  alt="Brand"/>
        

        </div>
        <div className={styled.Brand}>
        
            <Image  src={brand4}  alt="Brand"/>
        

        </div>
        
       
          
        </Slider>
      </div>
    );
  }
}



 