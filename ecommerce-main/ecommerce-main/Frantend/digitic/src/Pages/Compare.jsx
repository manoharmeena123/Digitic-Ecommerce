import { Box, Grid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BreadcrumbCompnent from '../Components/BreadcrumbCompnent'
import CompareCart from '../Components/CompareCart'
import { getcompare } from '../Redux/Compare/action'


const Compare = () => {

    const dispatch=useDispatch()
    
    const data=useSelector((state)=>state.Compare.data)
    console.log(data);

    useEffect(()=>{
        
      dispatch(getcompare)

    },[dispatch])
      
  return (
    <Box> 
    
    <Box mt="-2%" mb="2%" ml="45%">
      <BreadcrumbCompnent pa={"Compare Product"} />
    </Box>
    <Box bgColor={"#f5f5f7"} p="2%">
    <Grid templateColumns={{ xl:"repeat(6, 1fr)" ,md: "repeat(3, 1fr)",sm:"repeat(2, 1fr)" }}  gap="5">
    { data.length ===0?"ADD to Compare Product" :data.map((el)=>{
        return(
            <CompareCart key={el._id} el={el}/>
        )
    })

    }
        
    </Grid>

    </Box>
    </Box>

  )
}

export default Compare