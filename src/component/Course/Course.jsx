import { useState } from 'react'
import Estrella from '../Estrella/Estrella';
import styles from '../course/Course.module.css'
import { FaStar, FaBahai, FaCamera, FaFileAlt, FaChartBar, FaTwitter, FaFacebookF, FaYoutube, FaInstagram, FaTelegramPlane, FaWhatsapp, FaRegClock, FaThLarge } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function Course(props) {



  const { Title, Description, Category, Image, Score, PK_Course, Duration } = props

  console.log(Score);
  const [isFav, setIsFav] = useState(false);
  //const dispatch = useDispatch();
  //const myFavorites = useSelector((s) => s.myFavorites);


  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      //dispatch(deleteFavorites(ch.id));
    } else {
      setIsFav(true);
      //dispatch(addFavorites(ch));
    }
  }



  return (
    <div className={styles.card}>
      <img className={styles.img} src={Image} alt={Image} />
      <div className={styles.coursedet}>
        <div className={styles.similar1}>
          <FaThLarge />
          <h4>categoria</h4>
        </div>
        <div className={styles.similar2}>
          <FaRegClock />
          <h4>duracion</h4>
        </div>
      </div>
      <div className={styles.cardtit}><h1>{Title}</h1></div>
      <h3>{Description}</h3>
      <div className={styles.teach}>
        <img src="..\img\image 12.png" alt="perfil" />
        <h3>profe</h3>
        <div className={styles.btndetail}>
          <Link to={`/detail/${PK_Course}`}><button>Detail</button></Link>
        </div>
      </div>
    </div>


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
  )
}