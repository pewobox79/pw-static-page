import style from '../../../styling/AboutMe.module.css';
import { Chip } from '@mui/material';
import ExpVerticalLine from "./ExpVerticalLine.jsx";
import JobDetails from "./JobDetails.jsx";

export default function ExperienceItem({jobTitle, startDate, endDate, companyName, educationGrade,}) {
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
