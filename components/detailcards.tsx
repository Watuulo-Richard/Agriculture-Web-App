import React from 'react'
import DetailCard from './detailcard'
import { productProp } from '@/Types/types'

export default function DetailCards({productsData}:{productsData:productProp[]}) {
  return (
    <div className=''>
      {
        productsData.map((product)=>{
          return (
            <div className="" key={product.id}>
              <DetailCard title={product.title} description={product.description} image={product.images} price={product.price} quantity={product.quantity}/>
            </div>
          )
        })
      }
    </div>
  )
}
