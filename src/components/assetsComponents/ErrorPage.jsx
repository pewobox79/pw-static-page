import React from 'react'
import { Link } from 'react-router-dom'


export default function ErrorPage(){

    return(
        <div>
            
            <h1>Something went wrong!</h1>

            <Link className={styles.navLink} to="/">Go Back to Home</Link>
        </div>
    )
}