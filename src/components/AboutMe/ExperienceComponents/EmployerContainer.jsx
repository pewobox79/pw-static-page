import {useEffect, useState} from 'react';
import ExperienceItem from "./ExperienceItem.jsx";
import SpinnerComponent from "../../assetsComponents/SpinnerComponent.jsx";

export default function EmployerContainer() {
    const URL = 'https://pewobox.com/api/employerList';

    const [employers, setEmployers] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const dataFetch = fetch(URL, requestOptions)
            .then((data) => data.json())
            .then((response) => setEmployers(response));


    }, []);

    const experienceItems = employers?.map((item) => {
        return (
            <ExperienceItem
                companyName={item.title}
                startDate={item.field_start_date}
                endDate={item.field_end_date}
                jobTitle={item.field_job_title}
                key={item.uuid}
            />
        );
    });

    return <>{experienceItems.length > 0 ? experienceItems : <SpinnerComponent/>}</>;
}
