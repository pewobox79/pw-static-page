import style from '../../styling/AboutMe.module.css';

export default function SkillItem({skill, skillLevelValue, skillValueColor}) {


    const skillPercentage = skillLevelValue + '0%';

    return (
        <div className={style.skillItemBody}>
            <div
                style={{
                    width: `${skillPercentage}`,
                    backgroundColor: `${skillValueColor}`,
                }}
                className={style.skillLevel}
            >
                {skill}
            </div>
        </div>
    );
}
