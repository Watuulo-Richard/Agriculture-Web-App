
import DetailCards from '@/components/detailcards'
import FilterScroll from '@/components/filterscroll'
import NavigationBarBottomDetails from '@/components/navigationbarbottomdetails'
import NavigationDetails from '@/components/navigationdetails'
import Search from '@/components/search'
import React from 'react'

export default function page() {
  return (
    <div>
        <NavigationDetails/>
        <Search/>
        <FilterScroll/>
        <DetailCards/>
        <NavigationBarBottomDetails/>
    </div>
  )
}
