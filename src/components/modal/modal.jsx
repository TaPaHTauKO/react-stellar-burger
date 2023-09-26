import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react'
import ReactDOM from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import style from './modal.module.css'

const modalRoot = document.getElementById('modal')



function Modal({ setIsModalOpen, children, setIsClickIngridient, setIsClickOrderList }) {

    const onClick = () => {
        setIsModalOpen(false)
        setIsClickOrderList(false)
        setIsClickIngridient(false)
    }

    React.useEffect(() => {
        function onEsc(evt) {
            if (evt.code === 'Escape') {
                setIsModalOpen(false)
                setIsClickOrderList(false)
                setIsClickIngridient(false)
            }
        }

        document.addEventListener('keydown', onEsc);

        return () => document.removeEventListener('keydown', onEsc);

    }, [])

    return ReactDOM.createPortal(
        (<>
            <div className={style.modal}>

                <div className={style.modal_close_icon}>

                <CloseIcon type='primary' onClick={onClick} />

                </div>

                {children}

            </div>
            
            <ModalOverlay onClick={onClick} />
        </>
        ),
        modalRoot)
}



export default Modal