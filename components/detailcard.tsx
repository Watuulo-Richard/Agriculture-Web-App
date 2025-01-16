import React from 'react'
import Image from 'next/image'
import ImageProductOne from '@/public/P1.jpg'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export default function DetailCard() {
  return (
    <div className="mx-2 my-4 bg-white border border-gray-200 rounded-lg shadow overflow-hidden flex">
    <div className="w-[40%]">
        <Image src={ImageProductOne} className='w-full h-full object-cover block' alt="" />
    </div>
    <div className="w-[60%] p-2">
        <div className="">
            <div className="flex justify-between items-center">
            <h6 className='text-indigo-600'>Desishub Farms</h6>
            <button><FaRegHeart /></button>
            </div>
            <h4>Organic Mango</h4>
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
                <p className='text-slate-500'>200</p>
            </div>
        </div>
        <div className="flex justify-between items-center">
            <p className='text-textColor'>In Stock</p>
            <p className='text-textColorTwo font-semibold'>150</p>
        </div>
        <div className="py-2">
            <button className='text-slate-50 bg-textColor w-full rounded-sm'>Add Cart</button>
        </div>
    </div>
</div>
  )
}
