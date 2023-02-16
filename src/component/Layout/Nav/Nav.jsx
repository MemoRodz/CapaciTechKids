import React from 'react'
import styles from './nav.module.css'
import { Link } from 'react-router-dom'
function Nav() {
  return (

    <div className={styles.menu}>
      <nav>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/course"}>My Course</Link></li>
          <li><Link to={"/create"}>Create Course</Link></li>
          <li><Link to={"/donate"}>Donate</Link></li>
          <li><Link to={"/about"}>About</Link></li>
        </ul>
      </nav>
    </div>

  )
}

export default Nav