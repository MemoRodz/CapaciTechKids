import React from "react";
import styles from './Hamburger.module.css'

export default function Hamburger() {
  return (
    <div className={styles.hamburger}>
          <button>
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
  )
}