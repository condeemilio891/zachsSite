import React from 'react'
import "./App.css"

import ProfileBox from './Components/ProfilePanel/ProfilePanel'
import SearchBar from './Components/SearchBar/SearchBar'
import VCarousel from './Components/vCarousel/vCarousel'

const App = () => {
  return (
   
<div id="bg1">
  <>
    <ProfileBox/>
    {/* <SearchBar/> */}
    <div id='carouselBox'>
    
    <VCarousel />
    <VCarousel/>
    <VCarousel/>
    </div>
    </>
  </div>
    
  )
}

export default App

