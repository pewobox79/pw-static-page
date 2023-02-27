import {Typography} from '@mui/material';


export default function HeaderText({title, align, margin, variant}) {
    let alignText = align;
    if (!align) {
        alignText = 'center';
    }

    let marginValue = margin;
    if (!margin) {
        marginValue = '30px';
    }

    let headerType = variant;
    if (!variant) {
        headerType = 'h3';
    }

    return (
        <Typography
            sx={{textAlign: `${alignText}`, marginTop: `${marginValue}`}}
            variant={headerType}
        >
            {title}
        </Typography>
    );
}
