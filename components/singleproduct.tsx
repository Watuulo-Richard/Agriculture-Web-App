import Image from 'next/image'
import React from 'react'
import ImageProductOne from '@/public/P1.jpg'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import Link from 'next/link';

export default function SingleProduct() {
  return (
<div className="bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
    <Link href="/SingleProductDetails">
        <div className="">
            <Image src={ImageProductOne} alt="" />
        </div>
    </Link>
    <div className="p-2">
        <div className="">
            <h6 className='text-indigo-600'>Desishub Farms</h6>
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
