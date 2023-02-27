import { useEffect, useState } from 'react';
import ExperienceItem from "./ExperienceItem.jsx";


export default function EducationContainer() {
    const URL = 'https://pewobox.com/api/educationList';

    const [education, setEducation] = useState([
        {
            title: '',
            field_start_date: '',
            field_end_date: '',
            field_education_grade: '',
            field_job_title: '',
            uuid: '',
        },
    ]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const dataFetch = fetch(URL, requestOptions)
            .then((data) => data.json())
            .then((response) => setEducation(response));
    }, []);

    const experienceItems = education.map((item) => {
        return (
            <ExperienceItem
                companyName={item.title}
                startDate={item.field_start_date}
                endDate={item.field_end_date}
                jobTitle={item.field_job_title}
                key={item.uuid}
                educationGrade={item.field_education_grade}
            />
        );
    });

    return <>{experienceItems}</>;
}
