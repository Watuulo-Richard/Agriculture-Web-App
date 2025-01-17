import Image from 'next/image'
import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import Link from 'next/link';
export type myProductProp = {
    title:string, 
    image:string[], 
    price: number, 
    quantity: number, 
    description: string
}
export default function SingleProduct({title, image, price, quantity, description }:myProductProp) {
  return (
<div className="bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
    <Link href="/SingleProductDetails">
        <div className="w-full h-32">
            <Image src={image[0]} className='w-full h-full object-cover block' width={500} height={300} alt={title} />
        </div>
    </Link>
    <div className="w-full p-2">
        <div className="">
            <h6 className='text-indigo-600 line-clamp-1'>{description}</h6>
            <h4>{title}</h4>
        </div>
        <div className="flex justify-between items-center">
            <div className='flex text-yellow-500'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
            </div>
            <div className="">
                <p className='text-slate-500'>${price}</p>
            </div>
        </div>
        <div className="flex justify-between items-center">
            <p className='text-textColor'>In Stock</p>
            <p className='text-textColorTwo font-semibold'>{quantity}</p>
        </div>
        <div className="py-2">
            <button className='text-slate-50 bg-textColor w-full rounded-sm'>Add Cart</button>
        </div>
    </div>
</div>

  )
}
