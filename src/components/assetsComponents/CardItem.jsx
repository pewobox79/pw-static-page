
import { Card, CardContent, CardMedia } from '@mui/material';
import style from '../../styling/Card.module.css';
import GoToCourseButton from '../assetsComponents/Buttons/GoToCourseButton';

export default function CardItem({headerImage, description, title, uuid, courseUrl, partnerName, buttonTitleText}) {
    const sourceURL = import.meta.env.VITE_VERCEL_DRUPAL_IMAGE_URL
    const imgUrl = sourceURL + headerImage;
    return (
        <Card key={uuid} className={style.cardItem}>
            <CardMedia
                component='img'
                style={{objectFit: "contain"}}
                width='auto'
                height="170"
                image={
                    headerImage
                        ? imgUrl
                        : 'https://via.placeholder.com/350x150?text=CourseImage'
                }
                alt={`${title}`}
            />
            <CardContent className={style.cardContentBox}>
                <h3>{title}</h3>

                <p>{description}</p>
            </CardContent>
            <GoToCourseButton
                courseUrl={courseUrl}
                partner={partnerName}
                buttonTitle={buttonTitleText}
                infoText={`You will be redirected to ${courseUrl} by press the button below!`}
            />
        </Card>
    );
}
