
import style from '../../styling/ProjectDetails.module.css';
import HeaderText from "../assetsComponents/HeaderText.jsx";

export default function ProjectScreenShots({imageList, projectName}) {
    const arrayOfImages = imageList?.split(', ');
    console.log(arrayOfImages);
    //TODO alt attributes update
    const imageListItems = arrayOfImages?.map((item) => {
        const imageLink = 'https://pewobox.com/' + item;

        return (
            <img
                src={imageLink}
                key={item}
                width={150}
                height={150}

                alt={`screenshot of ${projectName}`}
            />
        );
    });
    return (
        <section className={style.screenShotSection}>
            <HeaderText title={'Screenshots of the Project'} variant={'h3'} />
            <div className={style.screenShotListWrapper}>{imageListItems}</div>
        </section>
    );
}
