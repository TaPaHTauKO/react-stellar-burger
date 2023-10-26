import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { ReactNode, useEffect } from "react";
import ReactDOM from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import style from './modal.module.css'
import { any, func } from 'prop-types';

const modalRoot = document.getElementById('modal') as HTMLElement

interface IModalProps {
    closeModalCb: () => void;
    children: ReactNode;
}


function Modal({ children, closeModalCb }: IModalProps) {


    const onClick = () => {
        closeModalCb()
    }


    useEffect(() => {
        function onEsc(evt: KeyboardEvent) {
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