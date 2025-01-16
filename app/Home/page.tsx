import Category from '@/components/category'
import MinHeading from '@/components/minheading'
import Navigation from '@/components/navigation'
import Search from '@/components/search'
import React from 'react'

export default function HomeScreen() {
  return (
    <>
       <Navigation/>
       <Search/>
       <MinHeading/>
       <Category/>
    </>
  )
}
