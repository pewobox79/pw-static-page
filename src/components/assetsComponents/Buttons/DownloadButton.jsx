import React from 'react'
import style from '../../../styling/Buttons.module.css'
import FileDownloadIcon from '@mui/icons-material/FileDownload';


const DownloadButton=({buttonText, downloadData})=>{

    return(

        <a  href={"https://pewobox.com/sites/default/files/2023-03/web_developer_peter_wolf_cv_2023.pdf"} target={"_blank"} style={{textDecoration: "none"}} download>
            <div className={style.downloadButton}>
                <FileDownloadIcon className={style.downloadIcon}/>
            <h4>{buttonText.toUpperCase()}</h4>
            </div>
        </a>





    )
}

export default DownloadButton