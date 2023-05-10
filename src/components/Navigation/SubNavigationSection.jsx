import React from 'react'
import style from '../../styling/SubNabigationSection.module.css'
import {NavLink} from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

const SubNavigationSection = ({subNavOpen, setSubNavOpen}) => {

    const display = {
        display: "block"
    }

    const noDisplay = {
        display: "none"
    }
    return (
        <section className={subNavOpen ? style.subNavigationSectionOpen:style.subNavigationSectionClosed}>

            <CloseIcon className={style.subNavCloseButton} fontSize={"medium"} sx={{color: "#646881"}}
                       onClick={() => setSubNavOpen(false)}/>

            <div className={style.subNavSectionInner}>
                <div className={style.mainSubNavigation}>
                    <ul className={style.subNavItems}>
                        <NavLink className={style.subNavLegalItem} to="/imprint"
                                 onClick={() => setSubNavOpen(false)}>Imprint</NavLink>
                        <NavLink className={style.subNavLegalItem} to="/cookies"
                                 onClick={() => setSubNavOpen(false)}>Cookies</NavLink>
                        <NavLink className={style.subNavLegalItem} to="/dataprotection"
                                 onClick={() => setSubNavOpen(false)}>Data Protection</NavLink>
                    </ul>
                </div>

                <div className={style.subNavLegalNavigation}>
                    <ul className={style.subNavItems}>
                        <NavLink className={style.subNavItem} to="/webdev-blog"
                                 onClick={() => setSubNavOpen(false)}>Blog</NavLink>
                        <NavLink className={style.subNavItem} to="/courses"
                                 onClick={() => setSubNavOpen(false)}>Courses</NavLink>
                        <NavLink className={style.subNavItem} to="/partner"
                                 onClick={() => setSubNavOpen(false)}>Partner</NavLink>

                        <NavLink className={style.subNavItem} to="/projects"
                                 onClick={() => setSubNavOpen(false)}>Projects</NavLink>
                        <NavLink className={style.subNavItemDemo} to="/demo/register"
                                 onClick={() => setSubNavOpen(false)}>Demo</NavLink>

                    </ul>


                </div>
            </div>
        </section>
    )
}

export default SubNavigationSection