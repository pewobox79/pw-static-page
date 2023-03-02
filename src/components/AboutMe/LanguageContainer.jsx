import style from '../../styling/AboutMe.module.css';
import LanguageItem from "./LanguageItem.jsx";

function LanguageContainer({ languageData }) {
    const languageList = languageData?.split(' ');

    const languageItems = languageList?.map((language, index) => {
        console.log(language);
        return (
            <LanguageItem
                key={index}
                language={language}
                languageLevel={language.field_level}
                languageValue={language.field_level_value}
            />
        );
    });

    return (
        <div className={style.languageContainer}>
            <div className={style.languageItemsBox}>{languageItems}</div>
        </div>
    );
}

export default LanguageContainer;
