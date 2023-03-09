import React from 'react'
import styles from './AIHome.module.css'
import { Link } from 'react-router-dom'

export default function AIHome() {
  return (
    <div className={styles.containerdiv}>
        <Link to={'/pregunta'}>
        <img className={styles.imagenrobot} src="https://res.cloudinary.com/dbbmgnhqf/image/upload/v1678325979/CAPACITECHKIDS/images/users/banner_curses/robotprofesorcapacitech_qa8uw7.png" alt="" />
        </Link>
        <div>
        <div className={styles.textorobot} >En CapaciTechKids hemos creado un profesor virtual para que puedas realizarle consultas sobre cualquier tema de nuestros cursos. Él te explicará de manera didáctica y amigable, para que puedas resolver tus dudas a cualquier hora del día.</div>
        <Link to={'/pregunta'}>
        <div className={styles.preguntale} >PREGUNTALE A NUESTRO PROFESOR!</div>
        </Link>
        </div>
    </div>
  )
}

