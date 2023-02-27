import style from '../../../styling/Services.module.css';
import { useEffect, useState } from 'react';
import SpinnerComponent from "../../assetsComponents/SpinnerComponent.jsx";
import ServiceItem from "./ServiceItem.jsx";
import SectionHeader from "../../assetsComponents/SectionHeader.jsx";


function ServiceSection({ serviceData }) {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    //TODO english selection value update
    const languageType = 'English';
    const serviceItems = services?.map((service) => {
        if (service.langcode === languageType && service.status) {
            return (
                <ServiceItem
                    id={service.uuid}
                    key={service.uuid}
                    title={service.title}
                    description={service.field_description}
                    image={service.field_service_images}
                    status={service.status}
                    subTitle={service.field_subtitle}
                    language={service.langcode}
                />
            );
        }
    });
    return (
        <section className={style.serviceSection}>
            <SectionHeader
                TitleVariant={'h5'}
                title={
                    'National and international clients get these core services.'
                }
            />
            <div className={style.serviceSectionInner}>
                {isLoading ? <SpinnerComponent /> : serviceItems}
            </div>
        </section>
    );
}
export default ServiceSection;
