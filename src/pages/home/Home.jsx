import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { FaCalendarAlt, FaUsers } from 'react-icons/fa'
import { LoginButton, LogoutButton, Profile } from '../../component'
import { useAuth0 } from '@auth0/auth0-react'


function Home() {
  const { isAuthenticated, user } = useAuth0()

  return (
    <>
      <div className={styles.circle}></div>
      <div className={styles.home}>
        <div className={styles.welcomecard}>
          <div className={styles.welc}>
            <h1 className={styles.welcome}>
              Bienvenidos a<br />
            </h1>
            <h1 className={styles.capaci}>
              CapaciTechKids
            </h1>
            <h3 className={styles.text}>
              CapaciTechKids es una interesante <br />
              plataforma que te enseñará <br />
              de la forma más interactiva
            </h3>
          </div>
          <div className={styles.kids}>
            <img src="img/kinds.png" alt="kids" />
          </div>
          {/* <div className={styles.login}>

              {isAuthenticated ? <>
                <Profile />
                <LogoutButton />
              </>
                :
                <>
                  <LoginButton />
                </>
              }
            </div> */}
        </div>

        <h2 className={styles.our}>Nuestros éxitos</h2>
        <p>Miles de estudiantes ya están aprendiendo de nuestra plataforma, que incluye<br />
          cientos de cursos que te prepararán para tu futuro.</p>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <h2>15k+</h2> <br />
            <p>Estudiantes</p>
          </div>
          <div className={styles.stat}>
            <h2>75%</h2><br />
            <p>Estudiantes egresados<br /> por curso </p>
          </div>
          <div className={styles.stat}>
            <h2>570</h2><br />
            <p>Pruebas</p>
          </div>
          <div className={styles.stat}>
            <h2> 68 </h2><br />
            <p>Profesores</p>
          </div>
          <div className={styles.stat}>
            <h2>10</h2><br />
            <p>Modernas<br /> Categorias</p>
          </div>
        </div>

        <h2 className={styles.all}>Plataforma de aprendizaje <span>Todo en Uno</span></h2>
        <p>CapaciTechKids ofrece la mejor solución de aprendizaje para los estudiantes, y a su vez<br />
          provee a los profesores con una plataforma especializada para compartir sus conocimientos.
        </p>

        <div className={styles.homecards}>
          <div className={styles.homecard}>
            <div className={styles.iconcardbg}>
              <HiOutlineDocumentText size="3rem" color='white' />
            </div>
            <h3>Cursos, módulos y
              <br />Exámenes.</h3>
            <p>Una forma sencilla y eficaz de<br />
              enseñanza. Cada curso se divide<br />
              en módulos, e incluye<br />
              exámenes para evaluar al
              estudiante.</p>
          </div>
          <div className={styles.homecard}>
            <div className={styles.iconcardbg}>
              <FaCalendarAlt size="3rem" color="white" />
            </div>
            <h3>Programación y<br />
              Seguimiento de asistencia</h3>
            <p>Estudiar desde todas partes, siempre.<br />
              Tú creas tu propio horario.<br />
              Gestiona tus clases en función<br />
              de tu tiempo y tus preferencias.</p>
          </div>
          <div className={styles.homecard}>
            <div className={styles.iconcardbg}>
              <FaUsers size="3rem" color='white' />
            </div>
            <h3>Seguimiento de<br />estudiantes</h3>
            <p>Correos electrónicos automatizados <br />
              para profesores y estudiantes.<br />
              Mantenemos informadas a ambas partes
              sobre su progreso.</p>
          </div>
        </div>

        <div>
          <h2 className={styles.study}>Estudiar nuevas tecnologías, es ser un<br />
            <span>CapaciTechKid!</span></h2>
          <p>Disponemos de los cursos más actualizados, que incluyen<br />
            las tecnologías más modernas, como desarrollo de negocios web,<br />
            marketing, diseño de interfaces y mucho más.
          </p>

        </div>

        <div className={styles.ult}>
          <Link to={'/course'}>Más información</Link>
        </div>

      </div>
    </>
  )
}

export default Home