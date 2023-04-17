import AssessmentIcon from "@mui/icons-material/Assessment";
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import {Link} from "react-router-dom";
import ModalOpenButton from "../assetsComponents/Modal/ModalOpenButton.jsx";
import ModalContainer from "../assetsComponents/Modal/ModalContainer.jsx";
import {useState} from "react";

function DemoAccess() {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <ModalOpenButton buttonIcon={<DashboardCustomizeIcon/>} setOpenModal={setOpenModal} openModal={openModal}/>
            <ModalContainer setOpenModal={setOpenModal} openModal={openModal} modalTitle={"Access Demo Area"} internalLink={"/demo/register"} clientName={"Demo Area"}
                            modalBody={"you are about to access the demo area of my website. All data you are registering to try the demo, will only be stored in your local storage. The GDPR will not be harmed with this. Your data privacy will be protected all the time. After loggin out to the demo, you will be asked to delete your data from the local storage."}/>
        </>
    )
}

export default DemoAccess