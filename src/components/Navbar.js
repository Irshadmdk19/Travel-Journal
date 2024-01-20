import React from 'react'

const Navbar = (props) => {
    return(
        <div className="nav-bar">
            <img src={props.img} alt='map-logo'/>
            <h2 className="header">My Travel Journel</h2>
        </div>

    )
}

export default Navbar