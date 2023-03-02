import style from '../../../styling/CoreValues.module.css';

export default function CoreValueItem({ title, src }) {
    return (
        <div className={style.coreValueItemContainer}>
            <div className={style.coreValueItem}>
                <img src={src} alt={title?.trim()} width={50} height={50} />
            </div>
            <p>{title}</p>
        </div>
    );
}
