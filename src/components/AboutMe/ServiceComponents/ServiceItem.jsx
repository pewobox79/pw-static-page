import style from '../../../styling/Services.module.css';


export default function ServiceItem({title, description, image, status, language, subTitle, id}) {
    const imageIconUrl = 'https://pewobox.com' + image;
    return (
        <div key={id} className={style.serviceItemContainer}>
            <div className={style.serviceItemInner}>
                <div className={style.serviceIcon}>
                    <img
                        src={imageIconUrl}
                        width={40}
                        height={40}
                        alt={title}
                    />
                </div>
                <div className={style.serviceTitle}>{title}</div>
                <div className={style.serviceSubtitle}>{subTitle}</div>
                <div className={style.serviceDescription}>{description}</div>
            </div>
        </div>
    );
}
