
import { fetchProducts } from '@/actions/categoryfetch'
import DetailCards from '@/components/detailcards'
import FilterScroll from '@/components/filterscroll'
import NavigationBarBottomDetails from '@/components/navigationbarbottomdetails'
import NavigationDetails from '@/components/navigationdetails'
import Search from '@/components/search'
import React from 'react'

export default async function page() {
  const receivedProducts = await fetchProducts() || []
  console.log(receivedProducts)
  return (
    <div>
        <NavigationDetails/>
        <Search/>
        <FilterScroll/>
        <DetailCards productsData = {receivedProducts}/>
        <NavigationBarBottomDetails/>
    </div>
  )
}
