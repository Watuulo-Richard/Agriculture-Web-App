
import React from 'react'
import SingleProduct from './singleproduct'



export default async function Products() {
    
  return (
    <div className='mx-2 mb-20 grid grid-cols-2 gap-2'>
        <SingleProduct/>
        <SingleProduct/>
    </div>
  )
}
