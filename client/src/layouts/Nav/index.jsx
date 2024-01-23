import React from 'react'
import { NavLink, Outlet } from "react-router-dom"

import "./Nav.css"

const Nav = () => {
  return (
    <main>
        <header>
            <h1>Key Sprint</h1>
            <nav>
                <NavLink to="/" className="layout-nav-navlink">Home</NavLink>
                <NavLink to="/solo" className="layout-nav-navlink">Solo</NavLink>
                <NavLink to="/challenge" className="layout-nav-navlink">Challenge</NavLink>
            </nav>
        </header>
        <Outlet />
    </main>
  )
}

export default Nav