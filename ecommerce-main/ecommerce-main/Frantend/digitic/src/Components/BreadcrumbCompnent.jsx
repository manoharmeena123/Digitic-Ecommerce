import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import React from 'react'

const BreadcrumbCompnent = ({pa}) => {
  return (
    <div>
    <Breadcrumb fontWeight='medium' fontSize='sm'>
    <BreadcrumbItem>
      <BreadcrumbLink href='/'>Home</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <BreadcrumbLink >{pa}</BreadcrumbLink>
    </BreadcrumbItem>

</Breadcrumb></div>
  )
}

export default BreadcrumbCompnent