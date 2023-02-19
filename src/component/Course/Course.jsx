import { useState } from 'react'
import Estrella from '../Estrella/Estrella';
import style from '../course/Course.module.css'
import { Link } from 'react-router-dom';
export default function Course(props) {



  const { Title, Description, Category, Image, Score, PK_Course,Duration } = props


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
    <div className={style.cont}>
      <div className={style.left}>
        <Estrella Score={Score} />
        <img className={style.img} src={Image} alt={Image} />
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
            <h2>{Category.slice(" ")}</h2>
          </div>
          <p>Duration: {Duration/60} Min.</p>
          <Link to={`/detail/${PK_Course}`}><button className={style.btn}>Study</button></Link>

        </div>
      </div>
    </div>
  )
}