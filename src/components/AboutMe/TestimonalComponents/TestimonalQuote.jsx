import style from '../../../styling/Testimonial.module.css';
import quoteIcon from '../../../assets/icons/left-quotes.png'


export default function TestimonialQuote({ quote }) {
    return (
        <div className={style.testimonialQuote}>
            <div className={style.testimonialIcon}>
                <img
                    src={quoteIcon}
                    width={20}
                    height={20}
                    alt={'Peter wolf testimonials quote icon'}
                />
            </div>
            <div className={style.testimonialQuoteText}>{quote}</div>
        </div>
    );
}
