import { Alert, AlertIcon, AlertTitle, Button, Grid, GridItem, Image, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal, Select, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { signin, signup } from "../Redux/UserSignup/action";
import * as Components from './Components';

function Signup() {
    const [signIn, toggle] =useState(true);
    const [details,setDetails]=useState([])
    const [login,setlogin]=useState([])
    const dispatch=useDispatch()
    const location=useLocation()
    const navigate=useNavigate()
    const [img,setimg]=useState("https://cdn-icons-png.flaticon.com/512/3135/3135715.png")
    
    const handlechange=(e)=>{
        let name=e.target.name
        let type=e.target.value
        setDetails({...details,[name]:type,Avatar:img})
        // console.log(details)
    }

    const handlelogin=(e)=>{
        let name=e.target.name
        let type=e.target.value
        setlogin({...login,[name]:type})
    }


    const handlesubmit=(e)=>{
        e.preventDefault()

        const {Name,Email,Password}=details
        if(Name!==undefined && Email!==undefined && Password!==undefined){
            // <Stack>            
            // <Alert mt="10%"  >
            // <AlertIcon />
            //     <AlertTitle>Signup Successfully</AlertTitle>

            // </Alert>
            // </Stack>

            dispatch(signup(details))
        
        }
        else{
            
            // <Alert  mt="20%" >
            // <AlertIcon />
            // console.log("suff")
            //     All field are not filled
            // </Alert>
            // console.log("else")

        }

    }
 
    const handlesubmitlogin=(e)=>{
        e.preventDefault()
        const {Email,Password}=login
        if(Email && Password)
        {
            dispatch(signin(login)).then((r)=>{
                const comingfrom=location.state.from || "/"
                navigate(comingfrom, {replace:true})
            })
        }
        
        
    }
    
    return(
         <Components.Container >
         
             <Components.SignUpContainer signinIn={signIn}>
                <Components.Form onSubmit={handlesubmit}>
                 <Popover>
                 <PopoverTrigger>
                   <Components.Image src={img}/>
                 </PopoverTrigger>
                 <Portal>
                   <PopoverContent>
                     <PopoverArrow />
                     <PopoverHeader>Choose Your Avatar</PopoverHeader>
                     <PopoverCloseButton />
                     <PopoverBody>
                     <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                      <Image w="150%" h="120%" onClick={()=>setimg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzwyqpjAmQf9cJZJYedogG6ivGM_FAyiIOwQ&usqp=CAU")} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzwyqpjAmQf9cJZJYedogG6ivGM_FAyiIOwQ&usqp=CAU"/>
                      <Image w="150%" h="120%" onClick={()=>setimg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-bO3uHEFkNpmTuytSRFBLu5pG3f0MTg-9g&usqp=CAU")} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-bO3uHEFkNpmTuytSRFBLu5pG3f0MTg-9g&usqp=CAU"/>
                      <Image w="150%" h="120%" onClick={()=>setimg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2mjBb7d_Up7YGnqpoU8fjWPdC8dl13PSwCw&usqp=CAU")} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2mjBb7d_Up7YGnqpoU8fjWPdC8dl13PSwCw&usqp=CAU"/>
                      <Image w="150%" h="120%" onClick={()=>setimg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjug1KDR5UNxfun07SRvqosKMM_ogMOVaVQ&usqp=CAU")} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjug1KDR5UNxfun07SRvqosKMM_ogMOVaVQ&usqp=CAU"/>
                      <Image w="150%" h="120%" onClick={()=>setimg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZADX7NWcDrxU8rveYKKv-Qm_gfglQFxwVfw&usqp=CAU")} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZADX7NWcDrxU8rveYKKv-Qm_gfglQFxwVfw&usqp=CAU"/>
                      <Image w="150%" h="120%" onClick={()=>setimg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScuQGyYbgV9HFyiunO9mF6_lnB6MYwcx6t3w&usqp=CAU")} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScuQGyYbgV9HFyiunO9mF6_lnB6MYwcx6t3w&usqp=CAU"/>
                      <Image w="150%" h="120%" onClick={()=>setimg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Ias-tgzMUqp1AGEaWEVvUTeyCC1dlVn_yQ&usqp=CAU")} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Ias-tgzMUqp1AGEaWEVvUTeyCC1dlVn_yQ&usqp=CAU"/>
                      <Image w="150%" h="120%" onClick={()=>setimg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGiauApOpu95sj6IxatDeXrrAfCVznCpX41g&usqp=CAU")} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGiauApOpu95sj6IxatDeXrrAfCVznCpX41g&usqp=CAU"/>
                    </Grid>
                     
                     </PopoverBody>
                     
                   </PopoverContent>
                 </Portal>
                </Popover>
                    
                     <Components.Title>Create Account</Components.Title>
                     <Components.Input type='text' name="Name" placeholder='Name' onChange={handlechange} />
                     <Components.Input type='email'  name="Email" placeholder='Email' onChange={handlechange} />
                     <Components.Input type='password' name="Password" placeholder='Password' onChange={handlechange} />
                     <Components.Button >Sign Up</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form onSubmit={handlesubmitlogin}>
                    
                      <Components.Title>Sign in</Components.Title>
                      <Components.Input type='email' name="Email" placeholder='Email' onChange={handlelogin} />
                      <Components.Input type='password' name="Password" placeholder='Password'  onChange={handlelogin}  />
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      <Components.Button>Sigin In</Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Welcome Back!</Components.Title>
                     <Components.Paragraph>
                         To keep connected with us please login with your personal info
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Hello, Friend!</Components.Title>
                       <Components.Paragraph>
                           Enter Your personal details and start journey with us
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               Sigin Up
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
     )
}

export default Signup;