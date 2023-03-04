import React from 'react'
import styles from '../About/About.module.css'
import { FaGithub } from "react-icons/fa";
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

const serviceEmail = import.meta.env.VITE_EMAILJS_SERVICE;
const templateContactUs = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACTUS;
const userId = import.meta.env.VITE_EMAILJS_USERID;

function About() {

  function enviarEmail(e) {
    e.preventDefault();
    console.log("Correo: ", e.target.email.value);
    emailjs.sendForm(serviceEmail, templateContactUs, e.target, userId).then(res => {
      swal("¡Gracias por tu comentario!", "¡Espera nuestra respuesta!", "success");
      console.log(res);
    })
  }

  return (
    <div className={styles.about}>
      <h1>Nosotros Somos</h1>
      <h2>Mision</h2>
      <h3>Concentramos nuestros esfuerzos en:<br />

        1. Mejorar este proyecto en infraestructura educativa, para aumentar la cobertura, el acceso y la asistencia con mejores habilidades técnicas para el aprendizaje.<br />

        2. Desarrollar proyectos que incentiven en los procesos de enseñanza y aprendizaje trabajando de la mano con los docentes para incrementar las expectativas educativas y laborales.</h3>

      <h2>Visión</h2>
      <h3>Queremos que la próxima generación de latinoamericanos vea en la educación como un vehículo de cambio para soñar, construir y cumplir su proyecto de vida. </h3>

      <div className={styles.devs}>
        <div className={styles.dev}>
          <a href="https://github.com/Fr33yr">
            <img className={styles.imgDev} src="https://res.cloudinary.com/dbbmgnhqf/image/upload/v1677253944/CAPACITECHKIDS/images/project/AV13.png" alt="" />
            <h1>Agustin Cristobo</h1>
            <h2>frase</h2>
            <div className={styles.gitUser}>
              <div className={styles.git}><FaGithub /></div>
              <h3>Fr33yr</h3>
            </div>
          </a>
        </div>
        <div className={styles.dev}>
          <a href="https://github.com/Brareyesb15">
            <img className={styles.imgDev} src="https://res.cloudinary.com/dbbmgnhqf/image/upload/v1677253944/CAPACITECHKIDS/images/project/AV13.png" alt="" />
            <h1>Brandon Reyes</h1>
            <h2>frase</h2>
            <div className={styles.gitUser}>
              <div className={styles.git}><FaGithub /></div>
              <h3>Brareyesb15</h3>
            </div>
          </a>
        </div>
        <div className={styles.dev}>
          <a href="https://github.com/Fabian-Rizzi">
            <img className={styles.imgDev} src="https://res.cloudinary.com/dbbmgnhqf/image/upload/v1677253944/CAPACITECHKIDS/images/project/AV13.png" alt="" />
            <h1>Fabian Rizzi</h1>
            <h2>frase</h2>
            <div className={styles.gitUser}>
              <div className={styles.git}><FaGithub /></div>
              <h3>Fabian-Rizzi</h3>
            </div>
          </a>
        </div>
        <div className={styles.dev}>
          <a href="https://github.com/MemoRodz">
            <img className={styles.imgDev} src="https://res.cloudinary.com/dbbmgnhqf/image/upload/v1677253944/CAPACITECHKIDS/images/project/AV14.png" alt="" />
            <h1>Guillermo Rodriguez</h1>
            <h2>frase</h2>
            <div className={styles.gitUser}>
              <div className={styles.git}><FaGithub /></div>
              <h3>MemoRodz</h3>
            </div>
          </a>
        </div>
        <div className={styles.dev}>
          <a href="https://github.com/Randyvangz">
            <img className={styles.imgDev} src="https://res.cloudinary.com/dbbmgnhqf/image/upload/v1677253943/CAPACITECHKIDS/images/project/AV11.png" alt="" />
            <h1>Randy Gutierrez</h1>
            <h2>frase</h2>
            <div className={styles.gitUser}>
              <div className={styles.git}><FaGithub /></div>
              <h3>Randyvangz</h3>
            </div>
          </a>
        </div>
        <div className={styles.dev}>
          <a href="https://github.com/Rickymayita">
            <img className={styles.imgDev} src="https://res.cloudinary.com/dbbmgnhqf/image/upload/v1677253944/CAPACITECHKIDS/images/project/AV14.png" alt="" />
            <h1>Ricardo maya</h1>
            <h2>frase</h2>
            <div className={styles.gitUser}>
              <div className={styles.git}><FaGithub /></div>
              <h3>Rickymayita</h3>
            </div>
          </a>
        </div>
        <div className={styles.dev}>
          <a href="https://github.com/SandroMalca">
            <img className={styles.imgDev} src="https://res.cloudinary.com/dbbmgnhqf/image/upload/v1677253944/CAPACITECHKIDS/images/project/AV14.png" alt="" />
            <h1>Sandro Malca</h1>
            <h2>frase</h2>
            <div className={styles.gitUser}>
              <div className={styles.git}><FaGithub /></div>
              <h3>SandroMalca</h3>
            </div>
          </a>
        </div>
      </div>
      <hr />
      <div style={{ width: "40%", backgroundColor: "lightgrey", margin: "0 auto", padding: "10px" }}>
        <h1>Contáctanos</h1>
        <hr />
        <form onSubmit={enviarEmail}>
          <div >
            <div >
              <label><b>Nombre: </b></label>
              <input type="text" style={{
                width: "316px",
                height: "30px",
              }} id="nombre" name="nombre" />
            </div>
            <div >
              <label><b>Email: </b></label>
              <input type="text" style={{
                width: "316px",
                height: "30px",
              }} id="email" name="email" />
            </div>
          </div>
          <div className="form-group">
            <label><b>Mensaje: </b></label>
            <textarea type="text" style={{
              width: "338px",
              height: "210px",
            }} id="mensaje" name="mensaje"></textarea>
          </div>
          <button type="submit" style={{ width: "50%", margin: "0 auto", marginTop: "20px" }}>Enviar Correo</button>
        </form>
      </div>
    </div>
  )
}

export default About