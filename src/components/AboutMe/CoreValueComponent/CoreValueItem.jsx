import style from '../../../styling/CoreValues.module.css';
import {useInView} from "react-intersection-observer";


export default function CoreValueItem({ title, src }) {

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });


    return (
        <div className={style.coreValueItemContainer} id="coreValueItem" ref={ref}>
            <div className={entry?.isIntersecting ? style.coreValueItem : style.coreValueItemHidden}>
                <img src={src} alt={title?.trim()} width={50} height={50}  loading="lazy"/>
            </div>
            <p>{title}</p>
        </div>
    );
}
