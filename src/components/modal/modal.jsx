import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react'
import ReactDOM from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import style from './modal.module.css'
import { useModal } from '../../hooks/useModal';
import { any, func } from 'prop-types';

const modalRoot = document.getElementById('modal')



function Modal({ children, closeModalCb }) {


    const onClick = () => {
        closeModalCb()
    }
    

    React.useEffect(() => {
        function onEsc(evt) {
            if (evt.code === 'Escape') {
                closeModalCb()           
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

Modal.propTypes = {
    children: any,
    closeModalCb: func,
  }

export default Modal