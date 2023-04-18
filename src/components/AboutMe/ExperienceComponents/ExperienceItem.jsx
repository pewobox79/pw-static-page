import style from '../../../styling/AboutMe.module.css';
import { Chip } from '@mui/material';
import ExpVerticalLine from "./ExpVerticalLine.jsx";
import JobDetails from "./JobDetails.jsx";

export default function ExperienceItem({jobTitle, startDate, endDate, companyName, educationGrade,}) {

    const today = new Date()
    const year = today.getFullYear()

    let myEndDate = ""

    if(year.toString() === endDate){
        myEndDate = "today"
    }else{
        myEndDate = endDate
    }

    return (
        <div className={style.experienceItem}>
            <ExpVerticalLine />
            <Chip label={`${startDate} - ${myEndDate}`} />
            <JobDetails
                companyName={`${companyName}`}
                jobTitle={jobTitle}
                educationGrade={educationGrade}
            />
        </div>
    );
}
