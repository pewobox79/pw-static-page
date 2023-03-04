import React from 'react'
import style from '../../../styling/Buttons.module.css'
import FileDownloadIcon from '@mui/icons-material/FileDownload';


const DownloadButton=({buttonText, downloadData})=>{
const downloadLink = "https://pewobox.com" + downloadData;
    return(

        <a  href={downloadLink} target={"_blank"} style={{textDecoration: "none"}} download>
            <div className={style.downloadButton}>
                <FileDownloadIcon className={style.downloadIcon}/>
            <h4>{buttonText.toUpperCase()}</h4>
            </div>
        </a>





    )
}

export default DownloadButton