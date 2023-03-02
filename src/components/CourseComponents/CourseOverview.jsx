import style from '../../styling/Card.module.css';
import SectionHeader from '../assetsComponents/SectionHeader';
import CardItem from '../assetsComponents/CardItem';
import Head from "../assetsComponents/Head.jsx";
import {getDataFromBackend} from "../../../apis/dataProvider.js";
import {useEffect, useState} from "react";


export default function Course() {


    const [courses, setCourses] = useState()


    useEffect(()=>{
    const courseData = getDataFromBackend("courselist").then(res => setCourses(res))
    },[])
    const courseItems = courses?.map((courseItem) => {
        console.log(courseItem);
        //TODO dynamic language switcher values
            return (
                <CardItem
                    key={courseItem.uuid}
                    uuid={courseItem.uuid}
                    title={courseItem.title}
                    description={courseItem.field_description}
                    headerImage={courseItem.field_courseimage}
                    courseUrl={courseItem.field_booking_url}
                    partnerName={courseItem.field_related_to}
                    buttonTitleText={"Go to Course"}
                />
            );

    });

    return (
        <>
            <Head
                title={
                    'Developer courses overview for HTML5, CSS3, JavaScript, ReactJS, NextJS and Shopware6'
                }
                description={
                    'As developer I share my knowledge in several courses for JavaScript, NextJS, ReactJS and Shopware6. Check out the list'
                }
            />
            <section className={style.coursesOverviewSection}>
                <SectionHeader
                    TitleVariant={'h1'}
                    title={'My Courses'}
                    SubTitleVariant={'h5'}
                    subTitle={
                        'Find out more about my courses. I am working since years as inhouse instructor for several SMB clients.'
                    }
                />
                <section className={style.cardWrapper}>
                    <div className={style.cardListingInner}>{courseItems}</div>
                </section>
            </section>
        </>
    );
}
