import React, { useState, useEffect } from "react";
import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { FaStar, FaBahai, FaCamera, FaFileAlt, FaChartBar, FaTwitter, FaFacebookF, FaYoutube, FaInstagram, FaTelegramPlane, FaWhatsapp, FaRegClock, FaThLarge } from "react-icons/fa";
import{BsGithub,BsLinkedin} from "react-icons/bs"
import {AiOutlineAppstore,AiOutlineClockCircle} from "react-icons/ai"

export default function Detail() {
  const { id } = useParams();
  const [course, setCourse] = useState([]);
  const starDate= new Date(course.Start_Date)
  const endDate = new Date(course.End_Date)
  const diff= (endDate.getFullYear() - starDate.getFullYear())*12+(endDate.getMonth() - starDate.getMonth())

  useEffect(() => {
    fetch(`http://localhost:3001/courses/detail/${id}`)
      .then((response) => response.json())
      .then((curso) => {
        if (curso.Title) {
          console.log("------>", curso);
          setCourse(curso);
        } else {
          window.alert("No hay cursos con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay cursos con ese ID");
      });
    return setCourse([]);
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.heard}>
        <img src="..\img\Rectangle 77.png" alt="{course.Title}" />
      </div>
      <div className={styles.detail}>
        <img src="..\img\Rectangle 77.png" alt="{course.Title}" />
        <h1>{course.Title} Title</h1>
        <div className={styles.studybutton}>
          <button>Study</button>
        </div>
        <hr />
        <h2>This Course includes</h2>
        <div className={styles.x2}>
          <FaBahai />
          <h4>Free access</h4>
        </div>
        <div className={styles.x2}>
          <FaCamera />
          <h4>Access on all devices</h4>
        </div>
        <div className={styles.x2}>
          <FaFileAlt />
          <h4>Certification of completion</h4>
        </div>
        <div className={styles.x2}>
          <FaChartBar />
          <h4>{course.Modules} Moduls</h4>
        </div>
        <hr />
        <h2>You'll learn</h2>
        <h4>{course.Description}</h4>
        <hr />
        <h2>Share this course</h2>
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
      <div className={styles.opinions}>
        <div className={styles.buttons}>
          <button>Overview</button>
          <button>Overview</button>
          <button>Overview</button>
          <button>Overview</button>
        </div>
        <div className={styles.startbox}>
          <div className={styles.point}>
            <div className={styles.ranking}>
              <div className={styles.top}>
                <h1>5 out of 5</h1>
                <div className={styles.fastart}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h3>Top Ranting</h3>
              </div>
              <div className={styles.start}>
                <h3>5 Stars</h3>
                <div className={styles.progressbar5}><div className={styles.progress5}></div></div>
                <h3>4 Stars</h3>
                <div className={styles.progressbar4}><div className={styles.progress4}></div></div>
                <h3>3 Stars</h3>
                <div className={styles.progressbar3}><div className={styles.progress3}></div></div>
                <h3>2 Stars</h3>
                <div className={styles.progressbar2}><div className={styles.progress2}></div></div>
                <h3>1 Stars</h3>
                <div className={styles.progressbar1}><div className={styles.progress1}></div></div>
              </div>
            </div>
            <div className={styles.comments}>
              <div className={styles.comment}>
                <div className={styles.commenttop}>
                  <div className={styles.userstart}>
                    <div className={styles.photo}>
                      <img src="..\img\image 12.png" alt="perfil" />
                    </div>
                    <div className={styles.namestart}>
                      <h1>Rocio</h1>
                      <div className={styles.userstarts}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>
                  <div className={styles.time}>
                    <FaRegClock />
                    <h4>3 Months</h4>
                  </div>
                </div>
                <div className={styles.commentbotom}><h3>At first I did not realize how valuable this course was, until I made 2 interviews to apply for a job. The first one was delighted by my skill level, and the second one...</h3></div>
              </div>
              <div className={styles.hrcomment}>
                <hr />
              </div>
              <div className={styles.comment}>
                <div className={styles.commenttop}>
                  <div className={styles.userstart}>
                    <div className={styles.photo}>
                      <img src="..\img\image 12.png" alt="perfil" />
                    </div>
                    <div className={styles.namestart}>
                      <h1>Belén</h1>
                      <div className={styles.userstarts}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>
                  <div className={styles.time}>
                    <FaRegClock />
                    <h4>3 Months</h4>
                  </div>
                </div>
                <div className={styles.commentbotom}><h3>Good course. Short duration with highly concentrated content on it. You must practice on your own to get a good grip on the topics. Would recommend.</h3></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.more}>
        <div className={styles.similarcourses}>
          <h1>Similar Courses</h1>
          <h3>See all</h3>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src="..\img\course 01.png" alt="course01" />
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
            <div className={styles.cardtitle}><h1>Course</h1></div>
            <h3>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</h3>
            <div className={styles.teach}>
              <img src="..\img\image 12.png" alt="perfil" />
              <h3>profe</h3>
              <div className={styles.btndetail}>
                <button>Detail</button>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <img src="..\img\course 02.png" alt="course02" />
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
            <div className={styles.cardtitle}><h1>Course</h1></div>
            <h3>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</h3>
            <div className={styles.teach}>
              <img src="..\img\image 12.png" alt="perfil" />
              <h3>profe</h3>
              <div className={styles.btndetail}>
                <button>Detail</button>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <img src="..\img\course 03.png" alt="course03" />
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
            <div className={styles.cardtitle}><h1>Course</h1></div>
            <h3>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</h3>
            <div className={styles.teach}>
              <img src="..\img\image 12.png" alt="perfil" />
              <h3>profe</h3>
              <div className={styles.btndetail}>
                <button>Detail</button>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <img src="..\img\course 04.png" alt="course04" />
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
            <div className={styles.cardtitle}><h1>Course</h1></div>
            <h3>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</h3>
            <div className={styles.teach}>
              <img src="..\img\image 12.png" alt="perfil" />
              <h3>profe</h3>
              <div className={styles.btndetail}>
                <button>Detail</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

//   return (
//     <div className={styles.detail}>
//       <div className={styles.txt}>
//         <h1>{course.name}</h1>
//         <h3>{course.status}</h3>
//         <p>{course.species}</p>
//         <p>{course.gender}</p>
//         <p>{course.origin?.name}</p>
//       </div>
//       <img className={styles.imgD} src={course.image} alt={course.name} />
//     </div>
//   );




// import React from "react";
// import styles  from "./Detail.module.css";
// import { Link } from "react-router-dom";

// export default function Detail(props){
//     const {title,instructor,duration,updated,description,modules,categoria,image}=props
//     return(
//         <div className={styles.container}>
//             <div className={styles.contaimerTitle}>
//                 <h1>{title}</h1>
//                 <h2>{categoria}</h2>
//             </div>
//             <div className={styles.containerImg}>{image}</div>
//             <div className={styles.containerSummary}>
//                 <h2>{instructor}</h2>
//                 <h2>{duration}</h2>
//                 <h2>{updated}</h2>
//             </div>
//             <div className={styles.containerDescription}>{description}</div>
//             <div className={styles.containerModules}>{modules}</div>
//             <div className={styles.containerBtn}>
//                 <Link to={`/detail/${props.id}`}><button>Study</button></Link>
//                 </div>
//         </div>
//     )
// }