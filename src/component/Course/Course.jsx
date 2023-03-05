import { useState,useEffect } from 'react'
import styles from './Course.module.css'
import Estrella from '../Estrella/Estrella';
import { FaStar, FaBahai, FaCamera, FaFileAlt, FaChartBar,
   FaTwitter, FaFacebookF, FaYoutube, FaInstagram, FaTelegramPlane,
    FaWhatsapp, FaRegClock, FaThLarge } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../models/baseUrl';


export default function Course(props) {

  const { Title, Description, Category, Image, Score, PK_Course, Duration } = props

  const [isFav, setIsFav] = useState(false);
  const [course,setCourse] = useState({});
  const [courseLoaded, setCourseLoaded] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const curso =  await axios.get(`${baseUrl}/courses/detail/${PK_Course}`)
        setCourse(curso.data);
        setCourseLoaded(true);
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
      <div className={styles.imagen}></div>
      <img className={styles.img} src={Image} alt={Image} />
      <div className={styles.coursedet}>
        <div className={styles.similar1}>
          <FaThLarge />
          {course.tblCategories.map((category) => (
  <h4 key={category.PK_Category}>{`${category.Name} `} </h4>
))}
        </div>
        <div className={styles.similar2}>
          <FaRegClock />
          <h4>{course.Duration} Min.</h4>
        </div>
      </div>
      <div className={styles.cardtit}><h1>{Title}</h1></div>
      <div className={styles.teach}>
        <img src="..\img\image 12.png" alt="perfil" />
        <h3>{course.tblUser.Name}</h3>
        <div className={styles.btndetail}>
          <Link to={`/detail/${course.PK_Course}`}></Link>
        </div>
      </div>
    </Link>
    </div>

) : null;
}