import style from '../../styling/HeaderSection.module.css';
import { Typography } from '@mui/material';

export default function SectionHeader({title, subTitle, SubTitleVariant, TitleVariant }) {
    return (
        <div className={style.sectionHeaderWrapper}>
            <div className={style.headerContent}>
                <Typography variant={TitleVariant}>{title}</Typography>
                <Typography variant={SubTitleVariant}>
                    {subTitle ? subTitle : ''}
                </Typography>
            </div>
        </div>
    );
}
