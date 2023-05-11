import { Box, Divider, Image, Input, InputGroup, InputLeftElement, InputRightElement, Select, Stack, Text } from '@chakra-ui/react'

import {Search2Icon} from "@chakra-ui/icons"

import {CgMenuGridO} from "react-icons/cg"
import compare from "../../Images/compare.svg"
import cart  from "../../Images/cart.svg"
import user  from "../../Images/user.svg"
import wishlist from "../../Images/wishlist.svg"
import {Link} from "react-router-dom"
import React, { useEffect, useState } from 'react'
import styled from "../../Styles/Navbar.module.css"
import DrawerComponent from '../Drawer'
import { useDispatch, useSelector } from 'react-redux'
import { Productsearch } from '../../Redux/Products/action'
import {FaSearch} from "react-icons/fa"
import { SearchReasultlist } from './SearchReasultlist'
import logo from "../../Images/digitic_logo.png"
const Navbar = () => {
  const [search,setsearch]=useState()

  const dispatch=useDispatch()
  const data=useSelector((state)=>state.Product.Pro)
  console.log(data,"se")
  useEffect(()=>{
    
    dispatch(Productsearch(search))

  },[dispatch,search])



  return (
    <div className={styled.container}>
        <nav className={styled.topnav}>
          <Link  to="/"> <Image bgColor={"black"} w="180px" h="50px" src={logo}/></Link>
          
           <div className={styled.inputtop} >           
          
              <FaSearch className={styled.search_icon} />
              <input
                placeholder="Type to search..."
                value={search}
                onChange={(e) => setsearch(e.target.value)}
              />
          { <SearchReasultlist results={data} />}
            </div>

           <div className={styled.topnavright}>
            <div className={styled.item}>
              <div className={styled.Navicon}>
              <Link to="/compare">  
                <div className={styled.Naviconfrant}>
                <Image  src={compare}  ml={{base:"-4%",lg:"6%"}} mt={{base:"1%"}} alt="compare"/>
                </div>
                <div className={styled.Naviconback}>
                <Image  src={compare} ml={{lg:"-1%", base:"-10%"}} mt={{base:"1%"}} alt="compare"/>
                </div> 
                </Link>
              </div>
             <Link to="/compare"><p className={styled.heading}>Compare <br/>Product</p></Link>
            </div>
            <div className={styled.item}>
            <div className={styled.Navicon}>
            <Link to="/wishlist">    
            <div className={styled.Naviconfrant}>
                <Image src={wishlist} ml={{base:"-1%",lg:"4%"}} mt={{base:"1%"}} alt="compare"/>
                </div>
                <div className={styled.Naviconback}>
                <Image src={wishlist} ml={{lg:"1%",base:"10px"}} mt={{base:"1%"}} alt="compare"/>
                </div>
              </Link> 
              </div>
            
              <Link to="/wishlist"><p className={styled.heading}>Favouite<br/> Wishlist</p></Link>
            </div>
            <div className={styled.item}>
            <div className={styled.Navicon}>
            <Link to="/login">  <div className={styled.Naviconfrant}>
                <Image src={user} ml={{base:"-1%",lg:"10%"}} mt={{base:"1%"}} alt="compare"/>
                </div>
                <div className={styled.Naviconback}>
                <Image src={user} ml={{lg:"1%",base:"80%"}} mt={{base:"1%"}} alt="compare"/>
                </div></Link>  
              </div>
            
              <Link to="/login"><p className={styled.heading}>Log in<br/>MyAccount</p></Link>
            </div>
            <div className={styled.item}>
            
             <Link>
              <DrawerComponent cart={cart}/>
             </Link>
             
            </div>
            
           </div>
           

        </nav>
        <Divider />
        
        <div className={styled.inputbottom}>           
           <InputGroup  bg={"white"} color="black" ml="25%" mt="3%" w="50%" h={"10%"}>
            <InputLeftElement
              pointerEvents='none'
              color='gray.300'
              fontSize='1.2em'
              
            />
            <Input  placeholder='Search Product here..' />
            <InputRightElement bg="yellow" children={<Search2Icon fontSize={"2xl"} color='green.500' />}  />

            </InputGroup>
            </div>
        <nav className={styled.bottomnav}>
        
    
        <div className={styled.item}>
             <div className={styled.icon}><CgMenuGridO fontSize={"30px"} p="10px" /></div>
             <Select placeholder='SHOP CATEGORIES' mt="5px" bg={"black"} border={"none"} >
              <option value='option1' >Option 1</option>
              <option value='option2' >Option 2</option>
              <option value='option3' >Option 3</option>
            </Select>
            <Divider orientation='vertical' h='40px' mt="10px" />     
        </div>
        <div className={styled.item2 }>
            <div >
              <Link to="/">  <p>HOME</p></Link>
            </div>
            <div >
                <Link><p>OUR STORE</p></Link>
            </div>
            <div >
                <Link to="/blogs"><p>BLOGS</p></Link>
            </div>
            <div >
                <a href="/contact"> <p>CONTACT</p></a>
            </div>
        </div>
        

        </nav>
    </div>
  )
}

export default Navbar