import Link from 'next/link'
import React from 'react'

export default function MinHeading() {
  return (
    <div className="flex justify-between items-center py-4 px-2">
        <h3 className='text-textColorTwo font-bold text-xl'>Shop By Category</h3>
        <Link href="./ProductDetails" className='text-textColor font-semibold text-lg'>
        See All
        </Link>
    </div>
  )
}
