import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='nav'>
        <Link  to="/" className='site-title'>Site Name</Link>
        <ul>
            {/* <li><a href="/pricing" className='site-title'>Pricing</a></li>
            <li><a href="/about" className='site-title'>About</a></li> */}
            <CustomLink to="/pricing">Pricing</CustomLink>
            <CustomLink to="/about">About</CustomLink>
        </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props}) {
    const path = window.location.pathname;

    return (
        <li className={path === to ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}

export default Navbar