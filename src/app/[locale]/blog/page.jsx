import Blog from '@/components/blog/blog'
import Breadcrumb from '@/components/utils/Breadcrumb'
import React from 'react'

const BlogPage = () => {
  return (
  <>
    <Breadcrumb title="Blog" subtitle="Blog"/>
    <Blog/> 
  </>
  )
}

export default BlogPage