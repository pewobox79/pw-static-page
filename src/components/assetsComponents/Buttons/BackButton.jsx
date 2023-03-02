import { useNavigate } from 'react-router-dom'
import style from '../../../styling/ProjectDetails.module.css';
export default function BackButton({ ctaTitle }) {

    const navigate = useNavigate()

    function goBack(){
       navigate("/projects")
    }
    return (
        <button onClick={goBack} className={style.backButton}>
            {ctaTitle.toUpperCase()}
        </button>
    );
}
