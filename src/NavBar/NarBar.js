import React from 'react'
import './navbar.css'

function NarBar() {
    return (
        <>
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Projects</a>
                </li>  
                <li className="nav-item">
                    <a className="nav-link" href="/">About</a>
                </li>  
                <li className="nav-item">
                    <a className="nav-link" href="/">Contact</a>
                </li>
            </ul>
        </nav>
        <div className="logo">
                <a href="/"><img src="images/pda-logo_white.png" alt="" /></a>
        </div>
        </>
    )
}

export default NarBar
