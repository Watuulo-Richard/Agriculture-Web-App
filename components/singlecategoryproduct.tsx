import Image from 'next/image'
import React from 'react'
import ImageCardOne from '@/public/cupcake-3807761f.png'
export default function SingleCategoryProduct() {
  return (
    <div className="w-full">
        <div className="w-full flex justify-center items-center mx-auto border-green-600 border-2 rounded-md p-2">
            <Image src={ImageCardOne} alt="" className='w-full h-full block object-cover' />
        </div>
        <div className="w-1/2">
            <p className='text-sm'>Vegetable & Fruit Seeds</p>
        </div>
    </div>
  )
}
