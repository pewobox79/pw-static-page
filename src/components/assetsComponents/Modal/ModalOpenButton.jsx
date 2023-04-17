import style from '../../../styling/Modal.module.css';

export default function ModalOpenButton({openModal, setOpenModal, buttonTitle, className, buttonIcon}) {
    function handleOpen(e) {
        e.preventDefault();
        setOpenModal(!openModal);
    }

    return (
        <button
            onClick={handleOpen}
            className={className ? className : style.goToButton}
        >
            {buttonTitle ? buttonTitle : buttonIcon}
        </button>
    );
}
