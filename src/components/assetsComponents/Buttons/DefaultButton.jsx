import React from 'react'
import {Link} from "react-router-dom";
import style from '../../../styling/Buttons.module.css'


export function DefaultButton({title, target, href}){
    return(
        <Link className={style.defaultButton} to={href} target={target}>{title}</Link>
    )
}