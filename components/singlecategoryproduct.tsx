import Image from 'next/image'
import React from 'react'
export default function SingleCategoryProduct({title , image}:{title:string , image:string}) {
    
  return (
    <div className="w-full">
        <div className="w-full h-16 flex justify-center items-center mx-auto border-green-600 border-2 rounded-md p-2">
            <Image src={image} alt="" className='w-full h-full block object-cover' width={500} height={300}/>
        </div>
        <div className="w-1/2">
            <p className='text-sm'>{title}</p>
        </div>
    </div>
  )
}
