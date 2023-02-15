import {useState} from 'react'
import Estrella from '../Estrella/Estrella';
import style from '../course/Course.module.css'
export default function Course(props) {

    const {Title, Description, Category,Image,score}=props

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
                <Estrella score={score} />
                <h4>Descripcion: <br/>{Description}</h4>
                
                </div>                                          
    </div>
  )
}
