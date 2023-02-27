import style from '../../styling/AboutMe.module.css';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import {personalData} from "./index.jsx";
import {PersonalDataController} from "../../../apis/controller/dataController.js";

export default function AboutMeHeader() {

    const myExpertData = new PersonalDataController(personalData, "English")
    const imgURL = myExpertData.getExpertImage()
    const persQuote = myExpertData.getPersonalQuote()
    const persDescription = myExpertData.getExpertDescription()
    const expertName = myExpertData.getExpertName()

    return (
        <section className={style.headerSection}>
            <div className={style.headerImageContainer}>
                <img
                    src={imgURL}
                    width={400}
                    height={500}
                    style={{ filter: 'grayscale(100%)' }}
                    alt={expertName}
                />
            </div>

            <div className={style.headerQuoteContainer}>
                <div className={style.aboutMeContentBox}>
                    <FormatQuoteIcon sx={{ fontSize: '5rem' }} />
                    <blockquote>{persQuote}</blockquote>
                    <p>{persDescription}</p>
                </div>
            </div>
        </section>
    );
}
