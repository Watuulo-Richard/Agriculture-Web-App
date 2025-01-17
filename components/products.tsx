
import React from 'react'
import SingleProduct from './singleproduct'
import { productProp } from '@/Types/types'



export default async function Products({productsData}:{productsData:productProp[]}) {
    
  return (
    <div className='mx-2 mb-20 grid grid-cols-2 gap-2'>
      {
      productsData.map((product)=>{
        return (
          <div key={product.id} className="">
            <SingleProduct id={product.id} title={product.title} image={product.images} price={product.price}  description={product.description} quantity={product.quantity}/>
          </div>
        )
      })
    }
  </div>
  )
}
