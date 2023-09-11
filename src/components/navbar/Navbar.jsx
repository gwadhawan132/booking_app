import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import React from 'react'

export default function Navbar(){
    //to navigate back to the homepage on clicking the login button of the navbar
    const navigate=useNavigate();

    const handleClickLogin=()=>{
        navigate("/");
    }
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className='logo'>GoTravel</span>

                <div className="navItems">
                    <button className='navButton'>Register</button>
                    <button className='navButton' onClick={handleClickLogin}>Login</button>
                </div>
            </div>
        </div>
    )
}

