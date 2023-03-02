import ModalOpenButton from '../Modal/ModalOpenButton';
import ModalContainer from '../Modal/ModalContainer';
import { useState } from 'react';
import style from '../../../styling/CourseOverview.module.css';

export default function GoToCourseButton({courseUrl, infoText, partner, buttonTitle}) {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className={style.goToCourseButtonWrapper}>
            <ModalOpenButton
                openModal={openModal}
                setOpenModal={setOpenModal}
                buttonTitle={buttonTitle}
                className={style.goToButton}
            />
            <ModalContainer
                openModal={openModal}
                setOpenModal={setOpenModal}
                modalTitle={'Hold up!'}
                modalBody={infoText ? infoText : ''}
                clientName={partner}
                externalLink={courseUrl}
            />
        </div>
    );
}
