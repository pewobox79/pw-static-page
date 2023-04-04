
import style from '../../styling/ProjectDetails.module.css';
import HeaderText from "../assetsComponents/HeaderText.jsx";
import RespItem from "./RespItem.jsx";

export default function ProjectResponsibility({responsibility}) {

    const respArray = responsibility?.split(", ")
    const ListOfResp = respArray?.map((item, index)=>{
            return(
                <RespItem key={index + item} title={item}/>
            )

    })

    return (
        <div className={style.responsibilitiesBlockWrapper}>
            <div className={style.projectHeaderSectionInner}>
            <HeaderText title={'My responsibilities'} variant={'h3'} />
            <div className={style.responsibilitiesTextBlock}>
                <ul>
                    {ListOfResp}
                </ul>
            </div>
            </div>
        </div>
    );
}
