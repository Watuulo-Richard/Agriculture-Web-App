import React from 'react'
import SingleCategoryProduct from './singlecategoryproduct'

export default function Category() {
  return (
    <div className='mx-2 grid grid-cols-4 gap-2'>
        <SingleCategoryProduct/>
        <SingleCategoryProduct/>
        <SingleCategoryProduct/>
        <SingleCategoryProduct/>
        <SingleCategoryProduct/>
        <SingleCategoryProduct/>
        <SingleCategoryProduct/>
        <SingleCategoryProduct/>
    </div>
  )
}
