import style from '../../styling/AboutMe.module.css';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default function AboutMeHeader(props) {
    console.log("props about me",props);
    const imgURL = 'https://pewobox.com' + props.field_profile_image;
    return (
        <section className={style.headerSection}>
            <div className={style.headerImageContainer}>
                <img
                    src={imgURL}
                    width={400}
                    height={500}
                    style={{ filter: 'grayscale(100%)' }}
                    alt={props.title}
                />
            </div>

            <div className={style.headerQuoteContainer}>
                <div className={style.aboutMeContentBox}>
                    <FormatQuoteIcon sx={{ fontSize: '5rem' }} />
                    <blockquote>{props.field_personal_quote}</blockquote>
                    <p>{props.field_description}</p>
                </div>
            </div>
        </section>
    );
}
