import style from '../../styling/AboutMe.module.css';

import {useInView} from "react-intersection-observer";


export default function SkillItem({skill, skillLevelValue, skillValueColor}) {

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 1,
        rootMargin: "-100px"
    });

    const skillPercentage = skillLevelValue + '0%';

    console.log(ref)
    return (
        <div className={style.skillItemBody} ref={ref}>
            <div
                style={{
                    width: `${entry?.isIntersecting ? skillPercentage : "0"}`,
                    backgroundColor: `${skillValueColor}`,
                }}
                className={style.skillLevel}
            >
                {skill}
            </div>
        </div>
    );
}
