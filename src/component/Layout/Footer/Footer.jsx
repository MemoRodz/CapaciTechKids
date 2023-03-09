import styles from './Footer.module.css'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to={'/about'}><h2>© 2023 Grupo 07 Cohorte FT33-C </h2></Link>      
    </footer>
  )
}

export default Footer