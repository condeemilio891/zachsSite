import React,{useState} from "react";
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft,faArrowUp, faDiagramNext } from "@fortawesome/free-solid-svg-icons";

const VCarousel = () => {

  const [translateY,setTranslateY]=useState(0)

  const updateY =(newY=>{
    if(newY>0){
        newY=0;
    } setTranslateY(newY)
  })
    
  return (
    <div className="carousel-container">
        <div className="carousel-inner">
        <div className="track" style={{transform:`translateY(${translateY}px)`}}>
            
    
            <div className="card-container">
                <div className="card">
                    <div className="img">1</div>
                    <div className="info">Title 1</div>
                </div>
            </div>
            <div className="card-container">
                <div className="card">
                    <div className="img">2</div>
                    <div className="info">Title 2</div>
                </div>
            </div>
            <div className="card-container">
                <div className="card">
                    <div className="img">3</div>
                    <div className="info">Title 3</div>
                </div>
            </div>
                <div className="card-container">
                    <div className="card">
                        <div className="img">4</div>
                        <div className="info">Title 4</div>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card">
                        <div className="img">5</div>
                        <div className="info">Title 5</div>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card">
                        <div className="img">6</div>
                        <div className="info">Title 6</div>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card">
                        <div className="img">7</div>
                        <div className="info">Title 7</div>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card">
                        <div className="img">8</div>
                        <div className="info">Title 8</div>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card">
                        <div className="img">9</div>
                        <div className="info">Title 9</div>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card">
                        <div className="img">10</div>
                        <div className="info">Title 10</div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="nav">
                    <button className="prev" onClick={()=>{updateY(translateY-100)}} >
                        <FontAwesomeIcon icon={faArrowUp}/>
                    </button>
                    {/* <button className="next">
                    <FontAwesomeIcon icon={faArrowUp}/>
                    </button> */}
                </div>
    </div>
  )
}

export default VCarousel