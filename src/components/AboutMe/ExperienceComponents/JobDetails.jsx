import style from '../../../styling/AboutMe.module.css';

export default function JobDetails({companyName, jobTitle, educationGrade,}) {
    return (
        <div className={style.expJobDetails}>
            <p>
                <span className={style.exprCompany}>
                    {educationGrade ? educationGrade : jobTitle}
                </span>
                <br />
                <span className={style.exprJobTitle}>{companyName}</span>
            </p>
        </div>
    );
}
