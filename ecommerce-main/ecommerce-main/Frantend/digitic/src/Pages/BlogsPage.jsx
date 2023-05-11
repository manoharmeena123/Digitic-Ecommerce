import styled from '../Styles/BlogsPage.module.css'
import React, { useEffect } from 'react'
import BreadcrumbCompnent from '../Components/BreadcrumbCompnent'
import Categories from '../Components/Filter/Categories'
import BlogCard from '../Components/BlogCard'
import { useDispatch, useSelector } from 'react-redux'
import { getBlog } from '../Redux/Blogs/action'

const BlogsPage = () => {
  const dispatch=useDispatch()
  const data=useSelector((state)=>state.Blogs.data)

  useEffect(()=>{
   dispatch(getBlog)

  },[dispatch])
  console.log(data)
  return (
    <div>
        <div className={styled.Path}> <BreadcrumbCompnent pa={"News"} /></div>
        <div className={styled.Container}>
        
            <div className={styled.RightContainer}>
              <div className={styled.Righttop}>
                <Categories />
              </div>
            </div>
            <div className={styled.LeftContainer}>
              
              { data && data.map((el)=>{
                return(
                  <BlogCard el={el} />
                )
              })

              }

               

              

            </div>

        </div>
    </div>
  )
}

export default BlogsPage