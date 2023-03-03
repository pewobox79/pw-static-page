import style from '../../styling/ProjectDetails.module.css';
import ModalContainer from '../assetsComponents/Modal/ModalContainer';
import ModalOpenButton from '../assetsComponents/Modal/ModalOpenButton';
import { useState } from 'react';
import {DefaultButton} from "../assetsComponents/Buttons/DefaultButton.jsx";



export default function ProjectFactItem({client, website, industry}) {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className={style.projectFactItems}>
            <div className={style.projectFactItemWrapper}>
                <div className={style.factsType}>Client:</div>
                <div className={style.factsTypeName}>{client}</div>
            </div>
            <div className={style.projectFactItemWrapper}>
                <div className={style.factsType}>Industry:</div>
                <div className={style.factsTypeName}>{industry}</div>
            </div>
            <div className={style.projectFactItemWrapper}>
                <div className={style.factsType}>Website:</div>
                <div>
                    {website ?
                        <ModalOpenButton
                            openModal={openModal}
                            setOpenModal={setOpenModal}
                            buttonTitle={website}
                        /> : <DefaultButton href={"#"} title={"No Source"}/>
                    }
                </div>
            </div>
            <ModalContainer
                openModal={openModal}
                setOpenModal={setOpenModal}
                modalTitle={'You are opening an external website'}
                modalBody={
                    'Click the button below to and you will access an external page. I dont have any control of this page..'
                }
                externalLink={website}
                clientName={client}
            />
        </div>
    );
}
