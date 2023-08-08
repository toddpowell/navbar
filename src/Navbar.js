import React from 'react'

const Navbar = () => {
  return (
    <nav className='nav'>
        <a href="/" className='site-title'>Site Name</a>
        <ul>
            {/* <li><a href="/pricing" className='site-title'>Pricing</a></li>
            <li><a href="/about" className='site-title'>About</a></li> */}
            <CustomLink href="/pricing">Pricing</CustomLink>
            <CustomLink href="/about">About</CustomLink>
        </ul>
    </nav>
  )
}

function CustomLink({ href, children, ...props}) {
    const path = window.location.pathname;

    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>{children}</a>
        </li>
    )
}

export default Navbar