import React, { useState } from 'react'
import "./style.css"
import { CSSTransition} from 'react-transition-group';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter,faClock,faHeart,faGripHorizontal,faGripVertical,faGear,faArrowLeft } from '@fortawesome/free-solid-svg-icons'

 


const ProfileBox = () => {

  const [showProfileBox,setShowProfileBox] =useState(true);
  
  

  function toggleProfileBox () {
    setShowProfileBox(!showProfileBox);
  }

  return (
    <>
    <div>
    <div className='showProfileBtn' onClick={toggleProfileBox}>{showProfileBox ? 'Hide' : 'Show'} Profile</div>

    <CSSTransition in={showProfileBox} timeout={500} classNames={{
      enterActive: 'animate__bounceIn',
      exitActive: 'animate__bounceOut'
    }}>

      <div className={`profileBox ${showProfileBox? "profileBox-active":""}`}>
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


        
        <div id="exitButton" onClick={toggleProfileBox}>{showProfileBox ? '' : 'Show'}
        <FontAwesomeIcon icon={faArrowLeft}/>Hide</div>
        
      </div>
  
      </CSSTransition>
      </div>
      </>
  )
}

export default ProfileBox

