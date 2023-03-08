import React, { useState, useEffect } from "react";
import styles from "./Detail.module.css";
import { useParams, Link, useLocation } from "react-router-dom";
import { FaBahai, FaCamera, FaFileAlt, FaChartBar, FaFacebookF, FaWhatsapp, FaRegClock } from "react-icons/fa";
import axios from "axios";
import { LoginButton} from '../../component/Login/Login'
import Estrella from '../../component/Estrella/Estrella'
import DetailCard from '../Detail/DetailCard/DetailCard'
import { baseUrl } from '../../models/baseUrl'
import { useSelector } from "react-redux";
import Descripcion from "./Descripcion";
import Button from '../../component/Buttons/Button/Button'


export default function Detail() {
  const { id } = useParams();
  const [course, setCourse] = useState([]);
  const [review, setReview] = useState([]);
  const [related, setRelated] = useState([])
  const [average, setAverage] = useState([])  
  const [relatedLoaded, setRelatedLoaded] = useState(false);
  const [desc,setDesc] = useState()
  

  const { pathname } = useLocation()

  const userInfo = useSelector(state => state.user)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const curso = await axios.get(`${baseUrl}/courses/detail/${id}`)
        const reviews = await axios.get(`${baseUrl}/reviews/related/${id}`)
        const rela = await axios.get(`${baseUrl}/categories/co/${id}`)
        const avg = await axios.get(`${baseUrl}/reviews/avg/related/${id}`)

        setCourse(curso.data);
        setReview(reviews.data);
        setRelated(rela.data);
        setAverage(avg.data);
        setRelatedLoaded(true);
        window.scrollTo(0, 0);
        console.log(">>>>>>>>",course);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [pathname]);



  function Score() {

    const score = average.Score / 2

    console.log("---> SCORE", score)
    if (score === null) {
      return 0
    }
    if (Math.round(score) === 1) {
      return 1
    }
    if (score === Math.ceil(score)) {
      return score
    } else {
      return score
    }
  }
  


    const handleFBClick = () => {
      window.open(`http://www.facebook.com/sharer.php?u=https://capacitechkids-production-fe31.up.railway.app/detail/${course.PK_Course}`);
    };

    const handleWSPClick = () => {
      window.open(`https://api.whatsapp.com/send?text=¡Echa un vistazo a esta página web! https://capacitechkids-production-fe31.up.railway.app/detail/${course.PK_Course}`);
    };
    const coursexstudent = () => {
      axios.post(`${baseUrl}/courses/coursexstudent?course=${id}&student=${userInfo.ID}`)
    }
    const handleDesc = (e) => {
      setDesc(e.target.name)
    
    }
   

  return relatedLoaded ? (
    <div className={styles.container}>
      <div className={styles.heard}>

        <h1> </h1>
        {/*<img src="https://res.cloudinary.com/dbbmgnhqf/image/upload/v1677262061/CAPACITECHKIDS/images/project/ca3_ixldy5.jpg" alt="{course.Title}" />*/}

      </div>

      <div className={styles.leftandringh}>
        <div className={styles.opinions}>
          <div className={styles.buttons}>

          <button name="Descripcion" onClick={handleDesc}>Descripción</button>
          <button name="Reseñas" onClick={handleDesc}>Reseñas</button>
          </div>
          { !desc ? <Descripcion/> : null}
          {desc==="Descripcion"? <Descripcion/> : null}
          {desc==="Reseñas"?                            
          <div className={styles.comments}>
              
              <div className={styles.startbox}>
               <div className={styles.point}>
                  <div className={styles.ranking}>
                    <div className={styles.top}>
                      <h1>{Score()} de 5</h1>
                      <Estrella Score={course.Score / 2} />
                      <h3>Average Score</h3>
                    </div>
                  </div>
                  {review.map(e =>
                  <div className={styles.comment}>
                    <div className={styles.commenttop}>
                      <div className={styles.userstart}>
                        <div className={styles.photo}>
                          <img src="..\img\image 12.png" alt="perfil" />
                        </div>
                        <div className={styles.namestart}>
                          <h1>{e.tblUser.Name}</h1>
                          <div className={styles.userstarts}>
                            <Estrella Score={e.Score} />
                          </div>
                        </div>
                      </div>
                      <div className={styles.time}>
                        <FaRegClock />
                        <h4>{e.Creation_Date}</h4>
                      </div>
                    </div>
                    <div className={styles.commentbotom}><h3>{e.Comment}</h3></div>
                    <div className={styles.hrcomment}><hr /></div>
                  </div>
                )}
                </div>
              </div>
                
              </div>
          : null }
          </div>
          
          {/* <button>M2</button>
          <button>M3</button>
          <button>M4</button>
          <button>M5</button> */}
         
          
                {/* <div className={styles.start}>
                  <h3>5 ⭐</h3>
                  <div className={styles.progressbar5}><div className={styles.progress5}></div></div>
                  <h3>4 ⭐</h3>
                  <div className={styles.progressbar4}><div className={styles.progress4}></div></div>
                  <h3>3 ⭐</h3>
                  <div className={styles.progressbar3}><div className={styles.progress3}></div></div>
                  <h3>2 ⭐</h3>
                  <div className={styles.progressbar2}><div className={styles.progress2}></div></div>
                  <h3>1 ⭐</h3>
                  <div className={styles.progressbar1}><div className={styles.progress1}></div></div>
                </div> */}            
        
        
        <div className={styles.detail}>
          <img src={course.Image} alt="{course.Title}" />
          <h1>{course.Title}</h1>
         
          
          {userInfo.isLogged?
            <div className={styles.studybutton}>
              <Link to={`/player/${course.PK_Course}`} onClick={coursexstudent}>{<Button msj={'Empezar'} />}</Link>
            </div>
            :
            <div className={styles.loginbtn}>
              <LoginButton/>
            </div>}
          <br />
          <hr />
          <br />
          <h2>Este curso incluye</h2>
          <br />
          <div className={styles.x2}>
            <FaBahai />
            <h4>Gratis para todo el mundo</h4>
          </div>
          <div className={styles.x2}>
            <FaCamera />
            <h4>Acceso en todos los dispositivos</h4>
          </div>
          <div className={styles.x2}>
            <FaFileAlt />
            <h4>Certificación de Egresado</h4>
          </div>
          <div className={styles.x2}>
            <FaChartBar />
            <h4>{course.Modules} Varios Módulos</h4>
          </div>
          <br />
          <hr />
          <br />
          <h2>Compartir este curso</h2>
          <div className={styles.social}>
            
            <div className={styles.fac}>
              <FaFacebookF target="_blank" onClick={handleFBClick} />
            </div>     
            
            <div className={styles.wsp}>
              <FaWhatsapp target="_blank" onClick={handleWSPClick}/>  
            </div>
          </div>
        </div>
      </div>
      <div className={styles.more}>
        <div className={styles.similarcourses}>
          <h1>Cursos Similares</h1>
          <Link to={"/course"}>Ver Todos</Link>
        </div>
        <div className={styles.cards}>
          {related && related.length <= 4 ? related.map(e => <DetailCard {...e} />) :
            related && related.slice(0, 4).map(e => <DetailCard {...e} />)}
        </div>
      </div>
    </div>
  ) : null;
}