import react from "react"

export default function Navbar(props){
    return(
        <div className="nav-bar">
            <img src={props.img}/>
            <h2 className="header">My Travel Journel</h2>
        </div>

    )
}