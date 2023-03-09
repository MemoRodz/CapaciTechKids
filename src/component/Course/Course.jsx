import { useState,useEffect } from 'react'
import styles from './Course.module.css'
import Estrella from '../Estrella/Estrella';
import { FaRegClock, FaThLarge } from "react-icons/fa";
import { Link,  } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../models/baseUrl';
import { FaStar } from 'react-icons/fa';

export default function Course(props) {

  const {PK_Course} = props


  const [isFav, setIsFav] = useState(false);
  const [course,setCourse] = useState({});
  const [avgScore,setAvgScore] = useState();
  const [courseLoaded, setCourseLoaded] = useState(false)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const curso =  await axios.get(`${baseUrl}/courses/detail/${PK_Course}`)
        setCourse(curso.data);
        setCourseLoaded(true);
        const avgScr = await axios.get(`${baseUrl}/reviews/avg/related/${PK_Course}`)
        setAvgScore(Math.round(avgScr.data.average_score * 10) / 10)

        console.log(avgScore)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [PK_Course]);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      //dispatch(deleteFavorites(ch.id));
    } else {
      setIsFav(true);
      //dispatch(addFavorites(ch));
    }
  }


  return courseLoaded ? (
    <div className={styles.card}>
      <Link to={`/detail/${course.PK_Course}`}>

      <img className={styles.img} src={course.Image} alt={course.Image} />

      <div className={styles.coursedet}>
        <div className={styles.similar1}>
          <FaThLarge /> 
          {course.tblCategories.map((category) => (
            <h4 key={category.PK_Category}>{`${category.Name} `} </h4>
            ))}
        </div>
        <h3><FaStar className={styles.estrellita}/> {avgScore}</h3>
        <div className={styles.similar2}>
          <FaRegClock />
          <h4>{course.Duration} Min.</h4>
        </div>
      </div>
      <div className={styles.cardtit}><h1>{course.Title}</h1></div>
      <div className={styles.teach}>
        <img src={course.tblUsers.find(a => a.PK_User === course.PK_User).Image} alt="perfil" />

        <h3>{course.tblUsers.find(a => a.PK_User === course.PK_User).Name}</h3>
        {/* <h3>{course.tblUsers[0].Name}</h3> */}
        {/* <div className={styles.btndetail}>
          <Link to={`/detail/${course.PK_Course}`}><button>Detail</button></Link>
        </div> */}

      </div>
    </Link>
    </div>

) : null;

}