import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from "../Styles/Home.module.css"
import service from "../Images/service.png"
import service1 from "../Images/service-02.png"
import service2 from "../Images/service-03.png"
import service3 from "../Images/service-04.png"
import service4 from "../Images/service-05.png"
import { Box, Heading, Image } from "@chakra-ui/react";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
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
      <div className={styled.serviceslider}>
        
        <Slider {...settings}>
        <div className={styled.service}>
        <div>
            <Image  src={service} w="50px" alt="service"/>
        </div>

        <div className={styled.service_description}>
            <div className={styled.service_title} >Free Shipping</div>
            <div className={styled.service_subtitle}>From all orders over $100</div>
        </div>
        </div>

        <div className={styled.service}>
        <div>
            <Image  src={service1} w="40px" alt="service"/>
        </div>

        <div className={styled.service_description}>
            <div className={styled.service_title} >Daily  surprise offers</div>
            <div className={styled.service_subtitle}>Save up to 25% off</div>
        </div>
        </div>

        <div className={styled.service}>
        <div>
            <Image  src={service2} w="35px" alt="service"/>
        </div>

        <div className={styled.service_description}>
            <div className={styled.service_title} >Support 24/7</div>
            <div className={styled.service_subtitle}>Shop with an expert</div>
        </div>
        </div>

        <div className={styled.service}>
        <div>
            <Image  src={service3} w="40px" alt="service"/>
        </div>

        <div className={styled.service_description}>
            <div className={styled.service_title} >Affordable Prices</div>
            <div className={styled.service_subtitle}>Get Factory direct price</div>
        </div>
        </div>

        <div className={styled.service}>
        <div>
            <Image  src={service4} w="47px" alt="service"/>
        </div>

        <div className={styled.service_description}>
            <div className={styled.service_title} >Secure Payments</div>
            <div className={styled.service_subtitle}>100% Protected Payments</div>
        </div>
        </div>

       
          
        </Slider>
      </div>
    );
  }
}



 