import React from 'react'
import style from './modal-overlay.module.css'
import { func } from 'prop-types'


function ModalOverlay({onClick}) {


  return (
    <div className={style.overlay} onClick={onClick}></div>
  )
}

ModalOverlay.propTypes = {
  onClick: func,
}

export default ModalOverlay