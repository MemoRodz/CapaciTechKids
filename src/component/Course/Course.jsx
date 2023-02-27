import { useState,useEffect } from 'react'
import styles from './Course.module.css'
import Estrella from '../Estrella/Estrella';
import { FaStar, FaBahai, FaCamera, FaFileAlt, FaChartBar,
   FaTwitter, FaFacebookF, FaYoutube, FaInstagram, FaTelegramPlane,
    FaWhatsapp, FaRegClock, FaThLarge } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Course(props) {

  const { Title, Description, Category, Image, Score, PK_Course, Duration } = props

  console.log(Score);
  const [isFav, setIsFav] = useState(false);
  const [course,setCourse] = useState({});
  const [courseLoaded, setCourseLoaded] = useState(false)
  //const dispatch = useDispatch();
  //const myFavorites = useSelector((s) => s.myFavorites);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const curso =  await axios.get(`http://localhost:3001/courses/detail/${PK_Course}`)
        setCourse(curso.data);
        setCourseLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      //dispatch(deleteFavorites(ch.id));
    } else {
      setIsFav(true);
      //dispatch(addFavorites(ch));
    }
  }

console.log(course)

  return courseLoaded ? (
    <div className={styles.card}>
      <Link to={`/detail/${course.PK_Course}`}>
      <img className={styles.img} src={Image} alt={Image} />
      <div className={styles.coursedet}>
        <div className={styles.similar1}>
          <FaThLarge />
          {course.tblCategories.map((category) => (
  <h4 key={category.PK_Category}>{`${category.Name} `}</h4>
))}
        </div>
        <div className={styles.similar2}>
          <FaRegClock />
          <h4>{course.Duration/3600}h</h4>
        </div>
      </div>
      <div className={styles.cardtit}><h1>{Title}</h1></div>
      <div className={styles.teach}>
        <img src="..\img\image 12.png" alt="perfil" />
        <h3>{course.tblUser.Name}</h3>
        <div className={styles.btndetail}>

        </div>
      </div>
    </Link>
    </div>

) : null;
}


     /* <div className={style.left}>
      </div>
      <div className={style.right}>
        <div className={style.upbar_card}>
          <div className={style.heart}>
            {isFav ? (
              <button onClick={() => handleFavorite()}>❤️</button>
            ) : (
              <button onClick={() => handleFavorite()}>🤍</button>
            )}
          </div>
          <button className={style.bttn} onClick={props.onClose}>X</button>
        </div>
        <div className={style.inf}>

          <div>
            <h3>{Title}</h3>
            
            <Estrella Score={Score / 2} />
          </div>
          <p>Duration: {Duration / 60} Min.</p>
          <Link to={`/detail/${PK_Course}`}><button className={style.btn}>Study</button></Link>

          </div>
          </div> */