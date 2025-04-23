import {  NavLink } from "react-router"
import Styles from "./PageNav.module.css"
import React from "react"
import Logo from "./Logo"

export function PageNav() {
    return (
        <nav className= {Styles.nav}>
            <Logo/>

            <ul>
                
                <li>
                <NavLink to="/price">
                Pricing
                </NavLink>
                </li>
                <li>
                <NavLink to="/products">
                Product
                </NavLink>
                </li>
                <li>
                <NavLink to="/login" className={Styles.ctaLink}>
                login
                </NavLink>
                </li>
            </ul>
            
        </nav>
    )
}


