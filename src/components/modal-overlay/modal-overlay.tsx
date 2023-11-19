import style from './modal-overlay.module.css'

type T = {
  onClick: ()=> void
}

function ModalOverlay({onClick}: T) {


  return (
    <div className={style.overlay} onClick={onClick}></div>
  )
}


export default ModalOverlay