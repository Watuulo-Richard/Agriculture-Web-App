import {fetchSingleProduct } from '@/actions/categoryfetch'
import DetailedMapped from '@/components/detailedmapped'
import NavigationDetails from '@/components/navigationdetails'
import React from 'react'

export default async function DetailedPage({params}:{params:Promise<{id:string}>}) {
  const {id} = await params
  // console.log(id)
  const recievedProduct = await fetchSingleProduct(id)
  // console.log(recievedProduct)
  return (
    <div>
      <NavigationDetails/>
      <DetailedMapped productData={recievedProduct}/>
    </div>
  )
}
