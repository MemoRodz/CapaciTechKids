import { useState } from 'react'
import Estrella from '../Estrella/Estrella';
import style from '../course/Course.module.css'
export default function Course(props) {

  const { Title, Description, Category, Image, score } = props

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
        <img className={style.img} src={Image} alt={Image} />
      </div>

      <div className={style.right}>
      <div className={style.upbar_card}>
        {isFav ? (
          <button onClick={() => handleFavorite()}>❤️</button>
        ) : (
          <button onClick={() => handleFavorite()}>🤍</button>
        )}
        <button className={style.bttn} onClick={props.onClose}>X</button>
      </div>

      <div className={style.inf}>
        <h1>{Title}</h1>
        <span>{Category.slice(" ")}</span>
        <Estrella score={score} />
        <p>Descripcion: <br />{Description}</p>
      </div>
      </div>

    </div>
  )
}
