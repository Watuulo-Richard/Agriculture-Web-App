import { productProp } from '@/Types/types'
import React from 'react'
// import DetailedCarousel from './detailedcarousel'
import CardCarousel from './detailedcarousel'

export default function DetailedMapped({productData}:{productData?:productProp | null}) {
  return (
    <div className=''>
        <div className="">
            {/* <DetailedCarousel image={productData?.images as string[]}/> */}
            <CardCarousel productData={productData}/>
        </div>
    </div>
  )
}
