import React from 'react'
import style from './modal-overlay.module.css'
import { func } from 'prop-types'

type T = {
  onClick: ()=> void
}

function ModalOverlay({onClick}: T) {


  return (
    <div className={style.overlay} onClick={onClick}></div>
  )
}

ModalOverlay.propTypes = {
  onClick: func,
}

export default ModalOverlay