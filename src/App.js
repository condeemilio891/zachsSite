import React from 'react'
import "./App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter,faClock,faHeart,faGripHorizontal,faGripVertical,faGear,faArrowLeft } from '@fortawesome/free-solid-svg-icons'



const App = () => {
  return (

<div id="bg1">
      <div id="profileBox">
        <div id="profileImage"/>
        <h1><FontAwesomeIcon icon={faFilter} />Filter</h1>
        
        <h1><FontAwesomeIcon icon={faClock} />Clock</h1>
        <h1><FontAwesomeIcon icon={faHeart} />Favorites</h1>
        <FontAwesomeIcon id="carouselIcons" icon={faGripVertical}></FontAwesomeIcon>
        <FontAwesomeIcon id="carouselIcons" icon={faGripHorizontal}></FontAwesomeIcon>
        <div id="profileButton" ><FontAwesomeIcon icon={faHeart}/>Profile</div>
        <div id="profileButton"><FontAwesomeIcon icon={faGear}/>Options</div>
        <h1><FontAwesomeIcon icon={faArrowLeft}/>Exit</h1>
      </div>
  </div>
    
  )
}

export default App

