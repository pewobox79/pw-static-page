import style from '../../../styling/Testimonial.module.css';
import { useEffect, useState } from 'react';
import TestimonialBox from "./TestimonialBox.jsx";
import HeaderText from "../../assetsComponents/HeaderText.jsx";

function TestimonialSection() {
    const [isLoading, setIsLoading] = useState(false);
    const [testimonialData, setTestimonialData] = useState([]);

    const testimonialItems = testimonialData?.map((item) => {
        return (
            <TestimonialBox
                key={item.uuid}
                quote={item.field_testimonial_quote}
                company={item.field_testimonial_company}
                role={item.field_testimonial_role}
                title={item.title}
                avatar={item.field_testimonial_avatar}
            />
        );
    });
    return (
        <>
            <section className={style.testimonialSection}>
                {testimonialItems ? (
                    testimonialItems
                ) : (
                    <div>I am waiting for some feedback...</div>
                )}
            </section>
        </>
    );
}

export default TestimonialSection;
