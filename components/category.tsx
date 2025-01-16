import React from 'react'
import SingleCategoryProduct from './singlecategoryproduct'
import { categoryProp } from '@/Types/types'

export default async function Category({categoryData}:{categoryData:categoryProp[]}) {
  return (
    <div className='mx-2 grid grid-cols-4 gap-2'>
        {
            categoryData?.map((category)=>{
                return (
            <div key={category.id}>
                    <SingleCategoryProduct  title={category.title} image={category.image}/>
            </div>
            )
          })  
        }
    </div>
  )
}
