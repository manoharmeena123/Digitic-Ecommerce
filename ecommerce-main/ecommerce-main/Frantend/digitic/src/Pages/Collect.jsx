import styled from '../Styles/Collection.module.css'
import React, { useEffect } from 'react'
import { Box, Button, Checkbox,  color,  Grid, Heading, Input, Select, Tag, Text } from '@chakra-ui/react'
import {FaDollarSign} from "react-icons/fa"
import BreadcrumbCompnent from '../Components/BreadcrumbCompnent';
import {IoReorderFourOutline, IoReorderThreeOutline, IoReorderTwoOutline} from "react-icons/io5"
import { useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import DrawerComponent from '../Components/Drawer2'
import ProductToggle from '../Components/ProductToggle';
import { useDispatch, useSelector } from 'react-redux';
import { Productdata, singledata, sortasc, sortdesc, sortprice, sorttitleaz, sorttitleza } from '../Redux/Products/action';
import Categories from '../Components/Filter/Categories';
import { getwish } from '../Redux/Wishlist/action';

const Collect = () => {
  const dispatch=useDispatch()
  var obj=useSelector((state)=>state.Product.Product)
  const [newdata,setdata]=useState(obj)
 
    const location =useLocation()
  let path=location.pathname.split("/")

  let newpath=path[2]
  // console.log(newpath,"p2")
  

  const [grid,setgrid]=useState(5)
 
const [gt,setgt]=useState(1)
const [lt,setlt]=useState(1000)
// const [searchParams,setsearchParams]=useSearchParams();
const [category,setcategory]=useState([])

const handleFilter=(e)=>{
  

  const option=e.target.value;
  let newcategory=[...category];
  if(newcategory.includes(option)){
    newcategory.splice(newcategory.indexOf(option),1)
  }
  else{
    newcategory.push(option)
    // setcategory(newcategory)
  }
  setcategory(newcategory)
  
  console.log(category,"size",newcategory)
  const update=obj.filter(a=>{
    let found=false
    a.Size.forEach(s=>{
      if(newcategory.includes(s)){
        found=true
      }

    })
    
    return found
  })
  
  console.log(update,"sizxxx")
  console.log(newcategory,newcategory.length)
  if(newcategory.length===0){

    console.log(newcategory.length,obj,".......")
    setdata(obj)
  }
  else{
    console.log(newcategory.length,obj,".......else")
    setdata(update)
  }
  
  console.log(category.every(s=>s));
}


  


  
  
  const {isError,IsLoading}=useSelector((state)=>state.Product)
  // console.log(isError,IsLoading,"load","col")

// useEffect(()=>{
//   for(let i=0;i< obj.length;i++ ){
//     // if(obj[i])
//   }

// },[category])

// console.log(obj[0].Color,"obj")
  
useEffect(()=>{
  
    dispatch(Productdata(newpath))
    
   dispatch(getwish)
  },[dispatch,newpath])
  
  
useEffect(()=>{
  setdata(obj)
},[obj])  
  
  const handle=()=>{}

  const handlecolor=(e)=>{
    let color=e.target.value
    let update=[]
    for(let i=0;i< obj.length;i++ ){
      // console.log(obj[i].Color,"obj")
      for(let j=0;j<obj[i].Color.length;j++){
        // console.log(obj[i].Color[j],"objinsi")
        if(obj[i].Color[j]===color){
          // console.log(obj[i].Color[j],color,obj[i])
          update.push(obj[i])
          

        }

      }

    }   
    setdata(update)
  
  }
  
  

    
  const handlefilter=(e)=>{
    let val=e.target.value
    if(val=="Price_l-h"){
     dispatch(sortasc(path[2]))
    }
    if(val=="Price_h-l"){
     dispatch(sortdesc(path[2]))
    }
    if(val=="Alphabetically_A-Z"){
      dispatch(sorttitleaz(path[2]))
      
    }
    if(val=="Alphabetically_Z-A"){
      dispatch(sorttitleza(path[2]))
    }
    // console.log(val,"wor")

  } 
     

  useEffect(()=>{
    dispatch(sortprice(path[2],gt,lt))
  },[gt,lt])
  
  return (
    <div className={styled.Container}>
    <div className={styled.Containertop}>
    
    <BreadcrumbCompnent pa={newpath}/>
  
  </div>
  <div className={styled.Containerbottom}>
      <div className={styled.leftbox}>
        <div className={styled.lefttop}>
          

          <Categories/>

        </div>


        <div className={styled.leftmiddle}>
          <Heading size={"sm"} p="4%">Fiter By</Heading>
          <Heading size={"xs"} p="4%">Availability</Heading>
          <Box display={"flex"} flexDirection="column">
          <Checkbox size={"sm"} colorScheme='green' onClick={handle} >
            In stock
          </Checkbox>
          <Checkbox  size={"sm"} colorScheme='green' onClick={handle} >
            Out of stock 
          </Checkbox>
         </Box>
         <Heading size={"xs"} p="4%">Price</Heading>
         <Box display={"flex"} gap={"1"} >
            <Box mt={"10px"}><FaDollarSign fontSize={"15px"}  color="#777777"/></Box><Input w="30%" Type={"number"} bg="#f7f7f7" onChange={(e)=>setgt(e.target.value)} />
            <Box mt={"10px"}><FaDollarSign fontSize={"15px"}  color="#777777"/></Box><Input w="30%" Type={"number"} bg="#f7f7f7" onChange={(e)=>setlt(e.target.value)} />
        </Box>
        <Heading size={"xs"} p="4%">Color</Heading>
          <Grid templateColumns={{ xl:"repeat(6, 1fr)" ,md: "repeat(5, 1fr)" }} gap="1" >
            <Input type="checkbox" width={"15%"} h="30px" borderRadius={"50%"} value={"#000000"} bg="#000000" onClick={(e)=>handlecolor(e)}/>
            <Input type="checkbox"  width={"15%"} h="30px" borderRadius={"50%"} value={"#0DFDFC"} bg="#0DFDFC" onClick={(e)=>handlecolor(e)}/>
            <Input type="checkbox" width={"15%"} h="30px" borderRadius={"50%"} value={"#11273B"} bg="#11273B" onClick={(e)=>handlecolor(e)}/>
            <Input type="checkbox" width={"15%"} h="30px" borderRadius={"50%"} value={"#293163"} bg="#293163" onClick={(e)=>handlecolor(e)}/>
            <Input type="checkbox" width={"15%"} h="30px" borderRadius={"50%"} value={"#424448"} bg="#424448" onClick={(e)=>handlecolor(e)}/>
            <Input type="checkbox" width={"15%"} h="30px" borderRadius={"50%"} value={"#7D2C33"} bg="#7D2C33" onClick={(e)=>handlecolor(e)}/>
            <Input type="checkbox" width={"15%"} h="30px" borderRadius={"50%"} value={"#948D9A"} bg="#948D9A" onClick={(e)=>handlecolor(e)}/>
            <Input type="checkbox" width={"15%"} h="30px" borderRadius={"50%"} value={"#A85A5A"} bg="#A85A5A" onClick={(e)=>handlecolor(e)}/>
            <Input type="checkbox" width={"15%"} h="30px" borderRadius={"50%"} value={"#ADADAD"} bg="#ADADAD" onClick={(e)=>handlecolor(e)}/>
            <Input type="checkbox" width={"15%"} h="30px" borderRadius={"50%"} value={"#B5CEDE"} bg="#B5CEDE" onClick={(e)=>handlecolor(e)}/>
            <Input type="checkbox" width={"15%"} h="30px" borderRadius={"50%"} value={"#BAB7BA"} bg="#BAB7BA" onClick={(e)=>handlecolor(e)}/>
            <Input type="checkbox" width={"15%"} h="30px" borderRadius={"50%"} value={"#CCBFAF"} bg="#CCBFAF" onClick={(e)=>handlecolor(e)}/>
            <Input type="checkbox" width={"15%"} h="30px" borderRadius={"50%"} value={"#D7252A"} bg="#D7252A" onClick={(e)=>handlecolor(e)}/>
            <Input type="checkbox" width={"15%"} h="30px" borderRadius={"50%"} value={"#E2BFB9"} bg="#E2BFB9" onClick={(e)=>handlecolor(e)}/>
            <Input type="checkbox" width={"15%"} h="30px" borderRadius={"50%"} value={"#E33935"} bg="#E33935" onClick={(e)=>handlecolor(e)}/>
            <Input type="checkbox" width={"15%"} h="30px" borderRadius={"50%"} value={"#E3A4A5"} bg="#E3A4A5" onClick={(e)=>handlecolor(e)}/>
            <Input type="checkbox" width={"15%"} h="30px" borderRadius={"50%"} value={"#F3CBC4"} bg="#F3CBC4" onClick={(e)=>handlecolor(e)}/>
            <Input type="checkbox" width={"15%"} h="30px" borderRadius={"50%"} value={"#FE9377"} bg="#FE9377" onClick={(e)=>handlecolor(e)}/>
          </Grid>
          <Heading size={"xs"} p="4%" >Size</Heading>
         <Box display={"flex"}  flexDirection="column" gap={"1"} >
         <Checkbox  size={"sm"} value="S" colorScheme='green' defaultChecked={category.includes("S")} onChange={handleFilter} >S</Checkbox>
         <Checkbox size={"sm"} value="M"  colorScheme='green' defaultChecked={category.includes("M")} onChange={handleFilter} >M</Checkbox>
         <Checkbox size={"sm"} value="L" colorScheme='green'  defaultChecked={category.includes("L")} onChange={handleFilter} >L</Checkbox>
         <Checkbox size={"sm"} value="XL" colorScheme='green' defaultChecked={category.includes("XL")} onChange={handleFilter} >XL</Checkbox>
         <Checkbox size={"sm"} value="XXL" colorScheme='green' defaultChecked={category.includes("XXL")} onChange={handleFilter}  >XXL</Checkbox>
         

        </Box>

        </div>
        <div className={styled.leftbottom}>
          <Tag p="15%" pl="1%" size={"lg"}>Headphones</Tag>
          <Tag p="15%" size={"lg"}>Laptop</Tag>
          <Tag p="15%" size={"lg"}>Mobile</Tag>
          <Tag p="15%" size={"lg"}>Oppo</Tag>
          <Tag p="15%" size={"lg"}>Speaker</Tag>
          <Tag p="15%" size={"lg"}>Tablet</Tag>
          <Tag p="15%" size={"lg"}>Vivo</Tag>
          <Tag p="15%" size={"lg"}>Wire</Tag>


        </div>
      </div>

      <div className={styled.rightbox}>
      <div   className={styled.righttopboxblock} >
        <div  className={styled.righttopbox}>
        <div className={styled.rightfilter}>
          <Box  display={"flex"} gap="2" alignItems={"center"} p="auto">
            <Heading  size={"xs"}  p="1">Sort by:</Heading>
            <Select className={styled.lefttext} w="70%" fontSize="14px" fontFamily={"sans-serif"} color={"#777777"}  p="1" bg="#f7f7f7" onClick={handlefilter}>
              <option  value='Feature'>Feature</option>
              <option  value='Bestselling'>Best selling</option>
              <option  value='Alphabetically_A-Z'>Alphabetically,A-Z</option>
              <option  value='Alphabetically_Z-A'>Alphabetically,Z-A</option>
              <option  value='Price_l-h'>Price,low to high</option>
              <option  value='Price_h-l'>Price,high to low</option>
              <option  value='Date_o-n'>Date,old to new</option>
              <option  value='Date_n-o'>Date,new to old</option>
            </Select>
          </Box>
        </div>
          <div className={styled.rightfilterbnt}>
            
            <DrawerComponent pa={newpath} />
            
          </div>
          
          <Box display={"flex"} gap="2" mt="1%" left={"0"} >
            <Box  border={"2px solid black"} borderRadius="10px" _hover={{bg:"#febd69",color:"white"}} cursor={"pointer"} bg="#f7f7f7" m="auto"  onClick={(e)=>setgrid("5")} >
              <IoReorderFourOutline className={styled.burgaricon}   />
            </Box>
            <Box  border={"2px solid black"} borderRadius="10px" m="auto" bg="#f7f7f7" _hover={{bg:"#febd69", color:"white" }} cursor={"pointer"} onClick={(e)=>setgrid("3")} >
              <IoReorderThreeOutline className={styled.burgaricon}   />
            </Box>
            <Box  border={"2px solid black"} borderRadius="10px" m="auto" bg="#f7f7f7" _hover={{bg:"#febd69" , color:"white"}} cursor={"pointer"} onClick={(e)=>setgrid("2")} >
              <IoReorderTwoOutline className={styled.burgaricon}  />
            </Box>
            <Box  border={"2px solid black"} borderRadius="10px" m="auto" bg="#f7f7f7" _hover={{bg:"#febd69" , color:"white"}} cursor={"pointer"} onClick={(e)=>setgrid("1")} >
              <IoReorderThreeOutline fontSize={"30px"} />
            </Box>
            
          </Box>
        
          </div>
            <Box display={`${category.length>0?"flex":"none"}`} m="2px 2%" gap="5" >
              <Button  borderRadius={"25px"} padding="23px" mb="2%" color={"white"} bgColor="black" _hover={{bgColor:"black"}} >Clear</Button>
              {/* <Text>Size :</Text> */}
              {
                category.map((el)=>{
                  return(
                    <>
                    
                    <Box mt="2px">
                      <Button borderRadius={"20px"} w="100px" padding="23px" _hover={{bgColor:"#FEBD69",color:"white"}} >{el}</Button>
                    </Box>
                    </>
                  )
                })
              }
            </Box>
        </div>
        <div className={`${grid==1?(styled.rightbottombox_1):grid==2?(styled.rightbottombox_2):grid==3?(styled.rightbottombox_3):(styled.rightbottombox)}`}>
          {IsLoading?"loading":
            newdata && newdata.map((el,index)=>{
              return(
                <>

                <ProductToggle key={el._id} el={el} grid={grid} />
                
                
                </>
              )
            }) 

          }
        </div>
      </div>
    
    </div>
    </div>
  )
}

export default Collect