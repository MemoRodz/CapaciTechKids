import React from "react";
import styles  from "./Detail.module.css";
import { Link } from "react-router-dom";

export default function Detail(props){
    const {title,instructor,duration,updated,description,modules,categoria,image}=props
    return(
        <div className={styles.container}>
            <div className={styles.contaimerTitle}>
                <h1>{title}</h1>
                <h2>{categoria}</h2>
            </div>
            <div className={styles.containerImg}>{image}</div>
            <div className={styles.containerSummary}>
                <h2>{instructor}</h2>
                <h2>{duration}</h2>
                <h2>{updated}</h2>
            </div>
            <div className={styles.containerDescription}>{description}</div>
            <div className={styles.containerModules}>{modules}</div>
            <div className={styles.containerBtn}>
                <Link to={`/detail/${props.id}`}><button>Study</button></Link>
                </div>
        </div>
    )
}