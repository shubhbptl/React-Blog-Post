import React from 'react'
import Logo from '../img/logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="links">
            <Link className='link' to="/?cat=penplotter">
                <h6>PenPlotter</h6>
            </Link>
            <Link className='link' to="/?cat=sumorobot">
                <h6>SumoRobot</h6>
            </Link>
            <Link className='link' to="/?cat=blog">
                <h6>Blog</h6>
            </Link>
            <Link className='link' to="/?cat=contact">
                <h6>Contact</h6>
            </Link>
            <span>UserName</span>
            <span>LogOut</span>
            <span className='write'>
                <Link className='link' to="/write">Write</Link>
            </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar