import React from 'react'
import {FcDonate} from 'react-icons/fc'
import styles from '../Gracias/Gracias.module.css'

function Gracias() {
  return (
    <div>
      <div className={styles.heard}>
        <img src="..\img\Rectangle 77big.png" alt="{course.Title}" />
      </div>
      <div className={styles.cont}>
        <FcDonate size="10rem"/>
        <h1>Gracias por tu donación</h1>
        <h2>Con tu ayuda, contribuyes a mejorar la educación de las futuras generaciones</h2>
      </div>
    </div>
    
  )
}

export default Gracias