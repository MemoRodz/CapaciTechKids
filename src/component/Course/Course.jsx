import { useState } from 'react'
import Estrella from '../Estrella/Estrella';
import style from '../course/Course.module.css'
export default function Course(props) {

<<<<<<< HEAD
  const { Title, Description, Category, Image, score } = props
=======
    const {Title, Description, Category,Image,Score}=props
>>>>>>> c38801d39f836efd8873c01cba8ce4821a73192f

  const [isFav, setIsFav] = useState(false);
  //const dispatch = useDispatch();
  //const myFavorites = useSelector((s) => s.myFavorites);


<<<<<<< HEAD
  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      //dispatch(deleteFavorites(ch.id));
    } else {
      setIsFav(true);
      //dispatch(addFavorites(ch));
=======
    function handleFavorite() { 
        if (isFav) {
        setIsFav(false);
        //dispatch(deleteFavorites(ch.id));
        } else {
        setIsFav(true);
        //dispatch(addFavorites(ch));
        }
>>>>>>> c38801d39f836efd8873c01cba8ce4821a73192f
    }
  }



  return (
    <div className={style.cont}>
<<<<<<< HEAD
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

=======
        <div className={style.upbar_card}>
            {isFav ? (
                <button onClick={() => handleFavorite()}>❤️</button>
                ) : (
                <button onClick={() => handleFavorite()}>🤍</button>
            )}
           <button className={style.bttn} onClick={props.onClose}>X</button>
        </div> 
        
        <div>
                <img className={style.img} src={Image} alt={Image}/>
                <h3>{Title}</h3>
                <h4>{Category.slice(" ")}</h4>
                <Estrella Score={Score} />
                <h4>Descripcion: <br/>{Description}</h4>
                
                </div>                                          
>>>>>>> c38801d39f836efd8873c01cba8ce4821a73192f
    </div>
  )
}
