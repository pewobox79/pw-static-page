import React from 'react'
import {Helmet} from 'react-helmet'

export default function Head({title, description, keywords, image}) {

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:url" content={window.location.href}/>
            <meta property="og:image" content={image}/>

        </Helmet>
    )
}