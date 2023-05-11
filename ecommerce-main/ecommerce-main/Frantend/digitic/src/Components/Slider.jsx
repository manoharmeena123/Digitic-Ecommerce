import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import baner1 from "../Images/main-banner-1.jpg"
import baner2 from "../Images/main-banner.jpg"
import styled from "../Styles/Home.module.css";
import { useDispatch } from "react-redux";

export default class AutoPlay extends Component {
 
    render() {
      const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear"
      };
      return (
        <div className={styled.slider} >
          
          <Slider {...settings}>
            <Box >
              <Image src={baner1} borderRadius={"20px"}   />
              <div className={styled.slideshow} >
              <div className={styled.slideshow_text1}>SUPERCHARGED FOR PROS</div>
                <div className={styled.slideshow__slidetitle }>iPad S13+ Pro</div>
                <div className={styled.slider_desc}> From $999.00 or $41.62/mo. <br/> for 24 mo. Footnote*</div>
                <Button mt="10%" bg="purple" p="7%" color="white" borderRadius={"50px"}>BUY NOW</Button>

              </div>
            </Box>
            <Box >
              <Image src={baner2}  borderRadius={"20px"} />
              <div className={styled.slideshow} >
              <div className={styled.slideshow_text1}>SUPERCHARGED FOR PROS</div>
                <div className={styled.slideshow__slidetitle }>Special sale </div>
                <div className={styled.slider_desc} > From $999.00 or $41.62/mo. <br/> for 24 mo. Footnote*</div>
                <Button mt="10%" bg="purple" p="7%"  color="white" borderRadius={"50px"}>BUY NOW</Button>

              </div>
            </Box>
          </Slider>
        </div>
      );
    }
  }