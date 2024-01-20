// eslint-disable-next-line no-unused-vars
import React from 'react'

const Main = (props) => {
    return(
        <div className="main-container">
        <div className="card">
           <div className="card-left">
               <img className="place" src={props.imgurl} alt="place"/>
               </div>

           <div className="card-right">
            {/* < className="loc_details"> */}
              <img className="loc" alt="location" src={`../images/${props.red_locator}`}/>
              {/* <img className="loc" src="./images/placeholder.png" /> */}
               <span className="loc-name"> {props.location}</span> 
              <a className="loc-link" href={props.mapurl}>Visit place on Google map</a>
            
                
              <h1 className="place-name"> {props.title}</h1>
              <h3 className="date">{props.date}</h3>
              <p className="about-place">
                {props.description}
            
            </p>
           </div>
           


          
        </div>
    </div>

    )
}

export default Main