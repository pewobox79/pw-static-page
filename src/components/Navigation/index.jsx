import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import styles from '../../styling/Navigation.module.css'
import NavBurger from "./NavBurger.jsx";
import SubNavigationSection from "./SubNavigationSection.jsx";
import DemoAccess from "./DemoAccess.jsx";


export default function Navigation() {

    const [subNavOpen, setSubNavOpen] = useState(false)
    let activeStyle = {
        color: "white",
        background: "#1ABC9C",
        outline: "1px solid #1ABC9C"
    };


    return (
        <>
            <nav className={styles.mainNavigation}>
                <NavLink className={styles.navLink} style={({isActive}) =>
                    isActive ? activeStyle : undefined
                } to="/">Home</NavLink>
                <NavLink className={styles.navLink} style={({isActive}) =>
                    isActive ? activeStyle : undefined
                } to="/aboutme">About Me</NavLink>
                <NavLink className={styles.navLink} style={({isActive}) =>
                    isActive ? activeStyle : undefined
                } to="/contact">Hire</NavLink>
                <NavBurger subNavOpen={subNavOpen} setSubNavOpen={setSubNavOpen}/>
            </nav>
            <SubNavigationSection subNavOpen={subNavOpen} setSubNavOpen={setSubNavOpen}/>
        </>
    )
}