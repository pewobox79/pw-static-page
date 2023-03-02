import style from '../../styling/Card.module.css';
import SectionHeader from '../assetsComponents/SectionHeader';
import CardItem from '../assetsComponents/CardItem';
import Head from "../assetsComponents/Head.jsx";
import {getDataFromBackend} from "../../../apis/dataProvider.js";
import {useState} from "react";

export let partnerData
try{
    partnerData = await getDataFromBackend("partnerlist")
}catch(err){
    console.log(err.message)
}
export default function PartnerOverview() {
    const [partner, setPartner] = useState(partnerData)
    const PartnerItems = partner?.map((partnerItem) => {
        console.log("partner",partnerItem);
        return (
            <CardItem
                key={partnerItem.uuid}
                uuid={partnerItem.uuid}
                title={partnerItem.title}
                description={partnerItem.field_description}
                headerImage={partnerItem.field_partner_logo}
                courseUrl={partnerItem.field_url}
                partnerName={partnerItem.field_related_to ? partnerItem.field_related_to : partnerItem.title}
                buttonTitleText={"Visit Partner Page"}
            />
        );

    });

    return (
        <>
            <Head
                title={
                    'Peter Wolf Partnerships for Web Development and Education. HTML5, CSS3, JavaScript, ReactJS, NodeJS, GitHub and more'
                }
                description={
                    'As developer I work for many yours with trustworthy web development partner and supporter!'
                }
            />
            <section className={style.coursesOverviewSection}>
                <SectionHeader
                    TitleVariant={'h1'}
                    title={'My Partner & Supporter'}
                    SubTitleVariant={'h5'}
                    subTitle={
                        'Since many years I work with trustworthy partner!'
                    }
                />
                <section className={style.cardWrapper}>
                    <div className={style.cardListingInner}>{PartnerItems}</div>
                </section>
            </section>
        </>
    );
}
