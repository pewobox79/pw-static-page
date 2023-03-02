import style from '../../styling/Card.module.css';
import SectionHeader from '../assetsComponents/SectionHeader';
import CardItem from '../assetsComponents/CardItem';
import Head from "../assetsComponents/Head.jsx";
import {getDataFromBackend} from "../../../apis/dataProvider.js";
import {useEffect, useState} from "react";

export default function BlogOverview() {
    const [article, setArticle] = useState()

    useEffect(()=>{
        const articleData = getDataFromBackend("articlelist").then(res => setArticle(res))
    },[])
    const ArticleItems = article?.map((articleItem) => {
        console.log("article",articleItem)
        //TODO dynamic language switcher values
        return (
            <CardItem
                key={articleItem.uuid}
                uuid={articleItem.uuid}
                title={articleItem.title}
                description={articleItem.field_description}
                headerImage={articleItem.field_courseimage}
                courseUrl={articleItem.field_booking_url}
                partnerName={articleItem.field_related_to}
                buttonTitleText={"Go to Course"}
            />
        );

    });

    return (
        <>
            <Head
                title={
                    'Web Development News and Insights created and researched by Peter Wolf'
                }
                description={
                    'News and Insights about Web Development, JavaScript, ReactJS, Drupal, SEO and more'
                }
            />
            <section className={style.coursesOverviewSection}>
                <SectionHeader
                    TitleVariant={'h1'}
                    title={'News & Insights'}
                    SubTitleVariant={'h5'}
                    subTitle={
                        'Check out my latests posts about Web Development, Education and Digital Transformation.'
                    }
                />
                <section className={style.cardWrapper}>
                    <div className={style.cardListingInner}><h2>I am working on some good content...</h2></div>
                </section>
            </section>
        </>
    );
}
