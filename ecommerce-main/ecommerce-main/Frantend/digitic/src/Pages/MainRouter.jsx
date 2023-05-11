import { Box, Checkbox } from '@chakra-ui/react'
import React from 'react'
import {Routes,Route} from "react-router-dom"
import Collection from './Collect'
import Home from './Home'
import Signup from '../Components/Signup'
import SingleProduct from './SingleProduct'
import Wishlist from './Wishlist'
import AddToCart from './AddToCart'
import CheckOut from './CheckOut'
import BlogsPage from './BlogsPage'
import Compare from './Compare'
import Contact from './Contact'
import RequAuth from './RequAuth'
const MainRouter = () => {
  
  return (
    <Box mt="5%" >
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/collections/:cat" element={<Collection/>}/>
            <Route path="/products/:title" element={<SingleProduct />}/>
            <Route path="/login" element={<Signup/>}/>
            <Route path="/wishlist" element={<Wishlist/>}/>
            <Route path="/addtocart" element={
              <RequAuth>
                <AddToCart/>
              </RequAuth>
            }/>
            <Route path="/compare" element={<Compare/>}/>
            <Route path="/checkout" element={<CheckOut/>}/>
            <Route path="/blogs" element={<BlogsPage/>}/>
            
            <Route path="/contact" element={<Contact/>}/>



        </Routes>
    </Box>
  )
}

export default MainRouter