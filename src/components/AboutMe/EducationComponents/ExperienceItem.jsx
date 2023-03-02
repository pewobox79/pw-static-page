import style from '../../../styling/AboutMe.module.css';
import { Chip } from '@mui/material';
import JobDetails from "../ExperienceComponents/JobDetails.jsx";
import ExpVerticalLine from "../ExperienceComponents/ExpVerticalLine.jsx";


export default function ExperienceItem({jobTitle, startDate, endDate, companyName, educationGrade}) {
    return (
        <div className={style.experienceItem}>
            <ExpVerticalLine />

            <Chip label={`${startDate} - ${endDate}`} />
            <JobDetails
                companyName={`${companyName}`}
                jobTitle={jobTitle}
                educationGrade={educationGrade}
            />
        </div>
    );
}
