import React from 'react'
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter,faClock,faHeart,faGripHorizontal,faGripVertical,faGear,faArrowLeft } from '@fortawesome/free-solid-svg-icons'



const ProfileBox = () => {
  return (


      <div id="profileBox">
        <div id="profileImage"/>
        <p ><FontAwesomeIcon id= "smallPanelButtons"  icon={faFilter} /></p>
        <p id= "smallPanelButtons"><FontAwesomeIcon icon={faClock} /></p>
        <p id= "smallPanelButtons"><FontAwesomeIcon icon={faHeart} /></p>
            <div id="carouselIconBox">
          <FontAwesomeIcon id="carouselIcons" icon={faGripVertical}></FontAwesomeIcon>
          </div>
          <div id="carouselIconBox">
          <FontAwesomeIcon id="carouselIcons" icon={faGripHorizontal}></FontAwesomeIcon>
          </div>

        <div id="profileButton" ><FontAwesomeIcon icon={faHeart}/>Profile</div>
        <div id="profileButton"><FontAwesomeIcon icon={faGear}/>Options</div>
        <div id="exitButton"><FontAwesomeIcon icon={faArrowLeft}/>Exit</div>
      </div>
  
    
  )
}

export default ProfileBox

