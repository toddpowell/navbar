import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

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
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}

export default Navbar