import React, { useState, useEffect } from "react";
import styles from "./Detail.module.css";
import { useParams, Link } from "react-router-dom";
import { FaBahai, FaCamera, FaFileAlt, FaChartBar, FaTwitter, FaFacebookF, FaYoutube, FaInstagram, FaTelegramPlane, FaWhatsapp, FaRegClock, FaThLarge } from "react-icons/fa";
import axios from "axios";
import Estrella from '../../component/Estrella/Estrella'
import { baseUrl } from '../../models/baseUrl'

export default function Detail() {
  const { id } = useParams();
  const [course, setCourse] = useState([]);
  const [review, setReview] = useState([]);
  const [related, setRelated] = useState([])
  const [relatedLoaded, setRelatedLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const curso = await axios.get(`${baseUrl}/courses/detail/${id}`)
        const reviews = await axios.get(`${baseUrl}/reviews/related/${id}`)
        const rela = await axios.get(`${baseUrl}/categories/co/${id}`)

        setCourse(curso.data);
        setReview(reviews.data);
        setRelated(rela.data)
        setRelatedLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log("Related", related)
  function Score() {

    const score = course.Score / 2

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
  console.log(id)


  return relatedLoaded ? (
    <div className={styles.container}>
      <div className={styles.heard}>

        <h1> </h1>
       {/*<img src="https://res.cloudinary.com/dbbmgnhqf/image/upload/v1677262061/CAPACITECHKIDS/images/project/ca3_ixldy5.jpg" alt="{course.Title}" />*/}

      </div>

      <div className={styles.leftandringh}>
        <div className={styles.opinions}>
          {/* <div className={styles.buttons}>

          <button>M1</button>
          <button>M2</button>
          <button>M3</button>
          <button>M4</button>
          <button>M5</button>
        </div> */}
          <div className={styles.startbox}>
            <div className={styles.point}>
              <div className={styles.ranking}>
                <div className={styles.top}>
                  <h1>{Score()} de 5</h1>
                  <Estrella Score={course.Score / 2} />
                  <h3>Top Score</h3>
                </div>
                <div className={styles.start}>
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
                </div>
              </div>
              <div className={styles.comments}>
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
        </div>
        <div className={styles.detail}>
          <img src={course.Image} alt="{course.Title}" />
          <h1>{course.Title} Titulo</h1>
          <div className={styles.studybutton}>
            <Link to={`/player/${course.PK_Course}`}><button>Empezar</button></Link>
          </div>
          <hr />
          <h2>Este curso incluye</h2>
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
            <h4>{course.Modules} 5 Módulos</h4>
          </div>
          <hr />
          <h2>Aprenderás</h2>
          <h4>{course.Description}</h4>
          <hr />
          <h2>Compartir este curso</h2>
          <div className={styles.social}>
            <div className={styles.tw}>
              <FaTwitter />
            </div>
            <div className={styles.fac}>
              <FaFacebookF />
            </div>
            <div className={styles.you}>
              <FaYoutube />
            </div>
            <div className={styles.ins}>
              <FaInstagram />
            </div>
            <div className={styles.tele}>
              <FaTelegramPlane />
            </div>
            <div className={styles.wsp}>
              <FaWhatsapp />
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
          <div className={styles.card}>
            <img src={related[0].Image} alt="course01" />
            <div className={styles.coursedet}>
              <div className={styles.similar1}>
                <FaThLarge />
                <h4>{related[0].tblCategories[0].Name}</h4>
              </div>
              <div className={styles.similar2}>
                <FaRegClock />
                <h4>{related[0].Duration / 3600}h</h4>
              </div>
            </div>
            <div className={styles.cardtitle}><h1>{related[0].Title}</h1></div>

            <div className={styles.teach}>
              <img src="..\img\image 12.png" alt="perfil" />
              <h3>{related[0].tblUser.Name}</h3>
              <div className={styles.btndetail}>
                <Link to={`/detail/${related[0].PK_Course}`}><button>Detalle</button></Link>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <img src={related[1].Image} alt="course01" />
            <div className={styles.coursedet}>
              <div className={styles.similar1}>
                <FaThLarge />
                <h4>{related[1].tblCategories[0].Name}</h4>
              </div>
              <div className={styles.similar2}>
                <FaRegClock />
                <h4>{related[1].Duration / 3600}h</h4>
              </div>
            </div>
            <div className={styles.cardtitle}><h1>{related[1].Title}</h1></div>

            <div className={styles.teach}>
              <img src="..\img\image 12.png" alt="perfil" />
              <h3>{related[1].tblUser.Name}</h3>
              <div className={styles.btndetail}>
                <Link to={`/detail/${related[1].PK_Course}`}><button>Detalle</button></Link>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <img src={related[2].Image} alt="course01" />
            <div className={styles.coursedet}>
              <div className={styles.similar1}>
                <FaThLarge />
                <h4>{related[2].tblCategories[0].Name}</h4>
              </div>
              <div className={styles.similar2}>
                <FaRegClock />
                <h4>{related[2].Duration / 3600}h</h4>
              </div>
            </div>
            <div className={styles.cardtitle}><h1>{related[2].Title}</h1></div>

            <div className={styles.teach}>
              <img src="..\img\image 12.png" alt="perfil" />
              <h3>{related[2].tblUser.Name}</h3>
              <div className={styles.btndetail}>
                <Link to={`/detail/${related[2].PK_Course}`}><button>Detalle</button></Link>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <img src={related[3].Image} alt="course01" />
            <div className={styles.coursedet}>
              <div className={styles.similar1}>
                <FaThLarge />
                <h4>{related[3].tblCategories[0].Name}</h4>
              </div>
              <div className={styles.similar2}>
                <FaRegClock />
                <h4>{related[3].Duration / 3600}h</h4>
              </div>
            </div>
            <div className={styles.cardtitle}><h1>{related[3].Title}</h1></div>

            <div className={styles.teach}>
              <img src="..\img\image 12.png" alt="perfil" />
              <h3>{related[3].tblUser.Name}</h3>
              <div className={styles.btndetail}>
                <Link to={`/detail/${related[3].PK_Course}`}><button>Detalle</button></Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  ) : null;
} 