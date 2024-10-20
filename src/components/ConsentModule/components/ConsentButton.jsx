import FingerprintIcon from '@mui/icons-material/Fingerprint';
import {useContext} from "react";
import {ConsentContext} from "../../../store/ContextStore.js";
import style from "../../../styling/ConsentModule.module.css";

const ConsentButton=()=>{

  const consentContext = useContext(ConsentContext)

  function handleClick() {

    consentContext.setContext({
     ...consentContext.context,
      consentModuleOpen:!consentContext.context.consentModuleOpen
    })

  }
  return <>{ consentContext.context.consentModuleOpen ? null: <FingerprintIcon onClick={handleClick} fontSize="large" className={style.consentButton}/>}
</>}

export default ConsentButton