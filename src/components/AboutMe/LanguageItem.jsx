import style from '../../styling/AboutMe.module.css';


export default function LanguageItem({language, languageLevel, languageValue}) {
    return (
        <div className={style.languageItem}>
            <span className={style.header}>{language}</span>
            <span className={style.body}>{languageLevel}</span>
        </div>
    );
}
