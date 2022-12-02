import React from 'react'
import {Helmet} from 'react-helmet'

export default function Head({title, descr, keywords, }){


    return(
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={descr}/>
            <meta name="keywords" content={keywords}/>
            <meta name="title" property="og:title" content={title} />
            <meta name="description" property="og:description" content={descr}/>

        </Helmet>
    )
}