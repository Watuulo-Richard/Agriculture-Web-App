import React from 'react'

export default function FilterScroll() {
  return (
    <div className='mx-2 overflow-scroll flex gap-2 justify-between items-center'>
        <button className='text-sm shadow-xl text-white bg-green-800 rounded-md md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 px-4 py-2'>All</button>
        <button className='text-sm shadow-xl bg-slate-300 text-textColorTwo rounded-md md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 p-2'>Mangos</button>
        <button className='text-sm shadow-xl bg-slate-300 text-textColorTwo rounded-md md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 p-2'>Banana</button>
        <button className='text-sm shadow-xl bg-slate-300 text-textColorTwo rounded-md md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 p-2'>JackFruit</button>
        <button className='text-sm shadow-xl bg-slate-300 text-textColorTwo rounded-md md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 p-2'>Avocado</button>
        <button className='text-sm shadow-xl bg-slate-300 text-textColorTwo rounded-md md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 p-2'>Maize</button>
        <button className='text-sm shadow-xl bg-slate-300 text-textColorTwo rounded-md md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 p-2'>Gnuts</button>
    </div>
  )
}
