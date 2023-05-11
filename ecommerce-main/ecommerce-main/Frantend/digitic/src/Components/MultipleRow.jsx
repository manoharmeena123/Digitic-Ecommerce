import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Collect from "../Pages/Collect";

import styled from "../Styles/Home.module.css";
import { Divider } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {Collection} from "../Redux/Collection/action"
import { useNavigate, useNavigation, useSearchParams } from "react-router-dom";

export default function SimpleSlider () {
  // const [Param,setParam]=useSearchParams() 
  // console.log(Parma)
 const dispatch=useDispatch()
 const navigation=useNavigate()
 const data=useSelector((state)=>state.collection.data)
console.log(data,"data")
 
useEffect(()=>{
  dispatch(Collection)

},[dispatch])

const handle=(title)=>{
  <Collect cat={title}/>
  let cat=title.split(" ").join("_")
  let Params={}
  Params.category=cat;
  
  // setParam(Params)
  navigation(`/collections/${cat}`)
}
 
    
    var settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      centerPadding: "100px",
      slidesToShow: 5,
      
      slidesToScroll: 1,
      speed: 500,
      rows: 2,
      slidesPerRow: 1,
      responsive: [
        {
          breakpoint: 984,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            // dots: true
          }
        },
        {
          breakpoint: 710,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2
          }
        }
        
      ]
    };
    return (
      <div className={styled.Multirow}>
        
        <Slider {...settings}>
        {
          data && data.map((el)=>{
            return(
            
            <div className={styled.Multi_container}>
          
            <div onClick={(e)=>handle(el.Title)} className={styled.Multi_title} >{el.Title}</div>
            <div className={styled.Multi_item }> {el.Item} Items</div>
            <div className={styled.Multi_image} ><img src={el.Image} alt="lap"/> </div>
             
            <Divider/>
          
          </div>

            )
          })
        }
        </Slider>
      </div>
          
          
          
          
      
    );
  }