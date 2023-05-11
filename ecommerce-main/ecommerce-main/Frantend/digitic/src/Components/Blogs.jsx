import { Box, Grid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import BlogCard from './BlogCard'
import { useDispatch, useSelector } from 'react-redux';
import { getBlog } from '../Redux/Blogs/action';

// const data=
// [
//     {
//         Date:"11/JUNE/2022",
//         Title:"A Beautiful Sunday Morning Renaissance",
//         Image:"	https://cdn.shopify.com/s/files/1/0620/5082/8457/articles/blog-5_910x.jpg?v=1654929043",
//         Discription:"You’re only as good as your last collection, which is an enormous pressure. I think there is something about luxury – it’s not something people need, but it’s what they want. It really pulls at their heart. I have a fantastic relationship with money.Scelerisque sociosqu ullamcorper urna nisl mollis vestibulum pretium commodo inceptos cum condimentum placerat diam venenatis blandit hac eget dis lacus a parturient a accumsan nisl ante vestibulum.",
//     },
//     {
//         Date:"11/JUNE/2022",
//         Title:"A Beautiful Sunday Morning Renaissance",
//         Image:"https://cdn.shopify.com/s/files/1/0620/5082/8457/articles/blog-5_910x.jpg?v=1654929043",
//         Discription:"You’re only as good as your last collection, which is an enormous pressure. I think there is something about luxury – it’s not something people need, but it’s what they want. It really pulls at their heart. I have a fantastic relationship with money.Scelerisque sociosqu ullamcorper urna nisl mollis vestibulum pretium commodo inceptos cum condimentum placerat diam venenatis blandit hac eget dis lacus a parturient a accumsan nisl ante vestibulum.",
//     },
//     {
//         Date:"11/JUNE/2022",
//         Title:"Sed Ut Perspiciatis Unde Omnis Renaissance",
//         Image:"https://cdn.shopify.com/s/files/1/0620/5082/8457/articles/blog-4_910x.jpg?v=1654928936",
//         Discription:"To enjoy alternately the sight of their distress. He really shouted with pleasure; and, shaking Monsieur Du Bois strenuously by the hand, wished him joy of having touched English ground; and then he held a candle to Madame Mokil, that he might have a more complete view of her disaster, declaring repeatedly, that he had never been better pleased in his life.",
//     },
//     {
//         Date:"11/JUNE/2022",
//         Title:"Vitae Magnis Fusce Laoreet Porttitor Hampden",
//         Image:"https://cdn.shopify.com/s/files/1/0620/5082/8457/articles/blog-3_910x.jpg?v=1654928829",
//         Discription:"You’re only as good as your last collection, which is an enormous pressure. I think there is something about luxury – it’s not something people need, but it’s what they want. It really pulls at their heart. I have a fantastic relationship with money.which is an enormous pressure. I think there is something about luxury – it’s not something people need, but it’s what they want. It really pulls at their heart. I have a fantastic relationship with money. I use it to buy my freedom. I’ve treated the waistcoat as if it were a corset.",
//     },
//     {
//         Date:"11/JUNE/2022",
//         Title:"Urna Pretium Elit Mauris Cursus Curabitu",
//         Image:"https://cdn.shopify.com/s/files/1/0620/5082/8457/articles/blog-2_910x.jpg?v=1654928783",
//         Discription:"You’re only as good as your last collection, which is an enormous pressure. I think there is something about luxury – it’s not something people need, but it’s what they want. It really pulls at their heart. I have a fantastic relationship with money.",
//     }
// ]
export default function Blogs() {
   const dispatch=useDispatch()
   const data=useSelector((state)=>state.Blogs.data)

   useEffect(()=>{
    dispatch(getBlog)

   },[dispatch])
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
    <div>
    <Box w="100%" m="2%" ml="1%" mb="1%" >
        
        <Slider {...settings}>
        
            {
                data && data.map((el)=>{
                    return(
                        <>
                            <BlogCard el={el}/>
                        </>
                    )
                })
            }
    
    </Slider>
    </Box>
    </div>
  )
}

