import style from '../../../styling/Testimonial.module.css';


export default function TestimonialQuote({ quote }) {
    return (
        <div className={style.testimonialQuote}>
            <div className={style.testimonialIcon}>
                <img
                    src={'/assets/icons/left-quotes.png'}
                    width={20}
                    height={20}
                    alt={'Peter wolf testimonials quote icon'}
                />
            </div>
            <div className={style.testimonialQuoteText}>{quote}</div>
        </div>
    );
}
