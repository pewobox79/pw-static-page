import style from '../../../styling/Testimonial.module.css';
import { useEffect, useState } from 'react';
import TestimonialBox from "./TestimonialBox.jsx";
/*const backendURL = import.meta.env.VITE_VERCEL_DRUPAL_BACKEND_URL*/
const backendURL = "https://pewobox.com/api/"
function TestimonialSection() {
    const [isLoading, setIsLoading] = useState(false);
    const [testimonialData, setTestimonialData] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const dataFetch = fetch(`${backendURL}testimonials`,requestOptions )
            .then(data => data.json())
            .then(response => setTestimonialData(response))
    }, [])

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
                <div className={style.testimonialInner}>
                {testimonialItems ? (
                    testimonialItems
                ) : (
                    <div>I am waiting for some feedback...</div>
                )}
                </div>
            </section>
        </>
    );
}

export default TestimonialSection;
