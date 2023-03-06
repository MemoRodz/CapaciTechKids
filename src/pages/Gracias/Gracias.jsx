import React from 'react'
import {FcDonate} from 'react-icons/fc'
import styles from '../Gracias/Gracias.module.css'

function Gracias() {
  return (
    <div>
      <div className={styles.cont}>
        <div className={styles.donate}><FcDonate size="10rem"/></div>
        <h1>Gracias por tu donación</h1>
        <h2>Con tu ayuda, contribuyes a mejorar la educación de las futuras generaciones</h2>
      </div>
    </div>
    
  )
}

export default Gracias