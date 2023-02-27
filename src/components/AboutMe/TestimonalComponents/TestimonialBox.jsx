import style from '../../../styling/Testimonial.module.css';
import { Avatar } from '@mui/material';
import TestimonialQuote from "./TestimonalQuote.jsx";


export default function TestimonialBox({avatar, company, role, quote, title}) {
    const avatarImage = 'https://pewobox.com' + avatar;
    return (
        <div className={style.testimonialCard}>
            <div className={style.avatarContainer}>
                {avatar ? (
                    <Avatar alt={`Avatar of ${title}`} src={`${avatarImage}`} />
                ) : (
                    <Avatar>pw</Avatar>
                )}
            </div>

            <TestimonialQuote quote={quote} />
            <div className={style.testimonialPerson}>
                <div className={style.separator}></div>
                <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                    {title}
                </span>
                <br />
                <span style={{ fontWeight: '400', fontSize: '0.8rem' }}>
                    {role}
                </span>
                <br /> <span style={{ fontWeight: '400' }}>{company}</span>
            </div>
        </div>
    );
}
