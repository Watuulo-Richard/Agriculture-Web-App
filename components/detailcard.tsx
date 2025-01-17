import React from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { myProductProp } from './singleproduct';
export default function DetailCard({title, image, price, quantity, description }:myProductProp) {
  return (
    <div className="mx-2 my-4 bg-white border border-gray-200 rounded-lg shadow overflow-hidden flex">
    <div className="w-[40%]">
        <Image src={image[0]} className='w-full h-full object-cover block' width={500} height={300} alt="" />
    </div>
    <div className="w-[60%] p-2">
        <div className="">
            <div className="flex justify-between items-center">
            <h6 className='text-indigo-600'>{description}</h6>
            <button><FaRegHeart /></button>
            </div>
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
                <p className='text-slate-500'>{price}</p>
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
