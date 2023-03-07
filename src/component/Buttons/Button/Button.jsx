import React from 'react'
import styles from '../Button/Button.module.css'

export default function Button() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.btn}>
                <span className={styles.btntext}>
                    <span>boton</span>
                </span>
            </div>
        </div>
    )
}
