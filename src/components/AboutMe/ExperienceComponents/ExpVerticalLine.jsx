import style from '../../../styling/AboutMe.module.css';

export default function ExpVerticalLine() {
    return (
        <div className={style.lineBox}>
            <div className={style.exprVerticalLine}></div>
            <div className={style.exprCircle}></div>
            <div className={style.exprVerticalLine}></div>
        </div>
    );
}
