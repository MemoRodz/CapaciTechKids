import React, { useEffect } from "react";
import styles from "./DetailCard.module.css";
import { Link } from 'react-router-dom'
import { FaRegClock, FaThLarge } from "react-icons/fa";


function DetailCard({
  Image,
  tblUsers,
  tblCategories,
  Duration,
  Title,
  PK_Course,
  PK_User
}) 
{
  // console.log(tblCategories)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.card}>
      <Link to={`/detail/${PK_Course}`}>
        <img src={Image} alt="course01" />
        <div className={styles.coursedet}>
          <div className={styles.similar1}>
            <FaThLarge />
            <h4>{tblCategories[0].Name}</h4>
          </div>
          <div className={styles.similar2}>
            <FaRegClock />
            <h4>{Duration}min</h4>
          </div>
        </div>
        <div className={styles.cardtitle}>
          <h1>{Title}</h1>
        </div>

        <div className={styles.teach}>
          <img src={tblUsers.find(a => a.PK_User === PK_User).Image}alt="perfil" />
          <h3>{tblUsers.find(a => a.PK_User ===   PK_User).Name}</h3>
        </div>
      </Link>
    </div>
  );
}

export default DetailCard;
