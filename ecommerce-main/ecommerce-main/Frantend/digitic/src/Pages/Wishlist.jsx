import { Box, Grid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BreadcrumbCompnent from '../Components/BreadcrumbCompnent'
import WishCart from '../Components/WishCart'
import { getwish } from '../Redux/Wishlist/action'

const Wishlist = () => {

    const dispatch=useDispatch()
    
    const data=useSelector((state)=>state.Wishlist.data)
    console.log(data);

    useEffect(()=>{
        
      dispatch(getwish)

    },[dispatch])
      
  return (
    <Box>    
    <Box mt="-2%" mb="2%" ml="45%">
      <BreadcrumbCompnent pa={"wishlist"} />
    </Box>
    <Box bgColor={"#f5f5f7"} p="2%">
    <Grid templateColumns={{ xl:"repeat(6, 1fr)" ,md: "repeat(3, 1fr)",sm:"repeat(2, 1fr)" }}  gap="5">
    { data.length ===0?"ADD in Wishlist" :data.map((el)=>{
        return(
            <WishCart key={el._id} el={el}/>
        )
    })

    }
        
    </Grid>

    </Box>
    </Box>

  )
}

export default Wishlist