import React from 'react'
import styles from '../About/About.module.css'
import { FaGithub } from "react-icons/fa";
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

const serviceEmail = import.meta.env.VITE_EMAILJS_SERVICE;
const templateContactUs = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACTUS;
const userId = import.meta.env.VITE_EMAILJS_USERID;
const correoValidate = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i; //import.meta.env.VITE_REGEX_VALIDATE_EMAIL;

export function validate(formData) {

  let errors = {};
  try {
    console.log(`validate ==> Nombre: ${formData.nombre.length}, Email: ${formData.email.length}, Mensaje: ${formData.mensaje.length}`);
    if (formData.nombre.length <= 0) {
      errors.nombre = 'El nombre no debe estar vacío.';
    }
    else if (formData.nombre.length < 6) {
      errors.nombre = 'El nombre debe ser de al menos 6 caracteres.';
    }
    else if (formData.nombre.length > 25) {
      errors.nombre = 'El nombre debe ser de máximo 25 caracteres.';
    }
    else if (!correoValidate.test(formData.email)) {
      errors.email = 'El correo debe ser correo electrónico válido.';
    }
    else if (formData.mensaje.length === 0) {
      errors.mensaje = 'El mensaje no debe estar vacío.';
    }
    else if (formData.mensaje.length > 1500) {
      errors.mensaje = 'El mensaje supera el máximo de 1,500 caracteres.';
    }
    return errors;
  } catch (error) {
    console.log(error);
  }
}
  
function About() {

  // console.log('RegexMail: ', correoValidate);

  const formDataInitialState = {
    nombre: "",
    email: "",
    mensaje: "",
  };
  const [validacion, setValidacion] = React.useState("");
  const [formData, setFormData] = React.useState(formDataInitialState);
  const [errors, setErrors] = React.useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [text, setText] = React.useState("");

  function handleTextChange(e) {
    // console.log(e.target.value);
    setText(e.target.value);
    // console.log(`Este es el TARGET: ${e.target} y este es el VALUE: ${e.target.value}`);
    console.log(`handleTextChange ==> Target.name: ${e.target.name}, Target.value: ${e.target.value}`);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("Ya en submit, correo: ", e.target.email.value);
    for (const [key, value] of Object.entries(errors)) {
      if (value.length !== 0) setValidacion(value);
    }
    try {
      console.log(`Service: ${serviceEmail}, Template: ${templateContactUs}, userId: ${userId}`);
      emailjs.sendForm(serviceEmail, templateContactUs, e.target, userId).then(res => {
        swal("¡Gracias por tu comentario!", "¡Espera nuestra respuesta!", "success");
        setFormData(formDataInitialState);
        console.log(res);
      })
    } catch (error) {
      console.log(error);
    }
  };

  function handleInputChange(e) {
    const { name, value } = e.target;
    //console.log(`Este es el KEY: ${e.target.key} y este es el VALUE: ${e.target.value}`);
    try {
      setErrors(
        validate({
          ...formData,
          [name]: value,
        })
      );
      setFormData({
        ...formData,
        [name]: value
      });
      console.log(`handleInputChange ==> NAME: ${e.target.name}, VALUE: ${e.target.value}, LENGTH: ${e.target.value.length}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.about}>
      <br />
      <h1>Nosotros Somos</h1>
      <br />
      <h2>Mision</h2>
      <br />
      <h3>Concentramos nuestros esfuerzos en:<br />

        1. Mejorar este proyecto en infraestructura educativa, para aumentar la cobertura, el acceso y la asistencia con mejores habilidades técnicas para el aprendizaje.<br />

        2. Desarrollar proyectos que incentiven en los procesos de enseñanza y aprendizaje trabajando de la mano con los docentes para incrementar las expectativas educativas y laborales.</h3>

<br />
      <h2>Visión</h2>
      <br />
      <h3>Queremos que la próxima generación de latinoamericanos vea en la educación como un vehículo de cambio para soñar, construir y cumplir su proyecto de vida. </h3>
<br />
      <div className={styles.devs}>
        <div className={styles.dev}>
          <a href="https://github.com/Fr33yr" target="_blank">
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
          <a href="https://github.com/Brareyesb15" target="_blank">
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
          <a href="https://github.com/Fabian-Rizzi" target="_blank">
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
          <a href="https://github.com/MemoRodz" target="_blank">
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
          <a href="https://github.com/Randyvangz" target="_blank">
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
          <a href="https://github.com/Rickymayita" target="_blank">
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
          <a href="https://github.com/SandroMalca" target="_blank">
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
        <form onSubmit={(e) => {
          handleSubmit(e);
        }}>
          <div >
            <div >
              <label><b>Nombre: </b></label>
              <input type="text" style={{
                width: "316px",
                height: "30px",
              }}
                id="nombre"
                name="nombre"
                minLength='6'
                maxLength='25'
                placeholder='Tu nombre.'
                required
                value={formData.nombre}
                onChange={handleInputChange}
              />
              {errors.nombre ? <div>{errors.nombre}</div> : null}
            </div>
            <div >
              <label><b>Correo electrónico: </b></label>
              <input type="text" style={{
                width: "316px",
                height: "30px",
              }}
                id="email"
                name="email"
                placeholder='Introduce un correo electrónico válido.'
                required
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email ? <div>{errors.email}</div> : null}
            </div>
          </div>
          <div className="form-group">
            <label><b>Mensaje: </b></label>
            <textarea type="text" style={{padding:"6px"}}
              id="mensaje"
              name="mensaje"
              rows="10"
              cols="70"
              placeholder='Deja tu mensaje'
              required
              value={formData.mensaje} onChange={handleInputChange}
            />
            <p>{formData.mensaje.length}/1500</p>
          </div>
          {validacion ? <div>{validacion}</div> : null}
          <button type="submit"
            style={{ width: "50%", margin: "0 auto", marginTop: "20px" }}
            disabled={Object.keys(validate).length}
          >Enviar comentario</button>
        </form>
      </div>
    </div>
  )
}

export default About