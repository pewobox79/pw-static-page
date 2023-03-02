import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavBurger = ({subNavOpen, setSubNavOpen}) => {

    function OpenSubNav() {
        setSubNavOpen(true)
    }

    function closeSubNav() {
        setSubNavOpen(false)
    }

    return (
        <>
            {subNavOpen ? <CloseIcon fontSize={"medium"} onClick={closeSubNav}/> :

                <MenuIcon fontSize={"medium"} onClick={OpenSubNav}/>

            }
        </>
    )
}

export default NavBurger