import { fetchCategories, fetchProducts } from '@/actions/categoryfetch'
import Category from '@/components/category'
import MinHeading from '@/components/minheading'
import Navigation from '@/components/navigation'
import NavigationBottom from '@/components/navigationbottom'
import Products from '@/components/products'
import Search from '@/components/search'
import React from 'react'

export default async function HomeScreen() {
    const recievedCategories= await fetchCategories() || []
    // console.log(recievedCategories)
    const recievedProducts = await fetchProducts() || []
    // console.log(recievedProducts)
  return (
    <>
       <Navigation/>
       <Search/>
       <MinHeading/>
       <Category categoryData={recievedCategories}/>
       <Products productsData={recievedProducts}/>
       <NavigationBottom/>
    </>
  )
}
