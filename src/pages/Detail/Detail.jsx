import React, { useState, useEffect } from "react";
import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
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
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCourse([]);
  }, [id]);
 
  return(
      <div className={styles.container}>
        <div className="cat">
          <img className="img_head" src="https://www.game-learn.com/wp-content/uploads/2021/08/you-x-ventures-Oalh2MojUuk-unsplash.jpg" alt="scrum" />
       </div>
       <ul>
          <button>Overview</button>
          <button>Overview</button>
          <button>Overview</button>
          <button>Overview</button>
       </ul>

       <div>
          <div className={styles.cont_stats_rating}>
            <div>
              <h3>{course.Score/2} out of 5</h3>
              <h3>{course.Score/2}</h3>
              <h3>Top Rating</h3>
            </div>
            <div>
              {/* Esto de incrementar/disminuir con el score de los reviews del estudiante */}
              <h3>5 Stars  -----------</h3>
              <h3>4 Stars  -----------</h3>
              <h3>3 Stars ----------</h3>
              <h3>2 Stars ----------</h3>
              <h3>1 Stars ----------</h3>
            </div>
          </div>
          <div className={styles.cont_reviews}>
            <div>
              <img className="img_user" src="" alt="" />
              <h3>Giulana</h3>
              <h3>⭐⭐⭐⭐⭐</h3>
              <h3>At first I did not realize how valuable this course was, until I made 2 interews to apply for job. The first one was delighted by my skill level, and the second one...</h3>
              <h3>{diff} Month</h3>
              <hr/>
              <img className="img_user" src="" alt="" />
              <h3>Giulana</h3>
              <h3>⭐⭐⭐⭐⭐</h3>
              <h3>At first I did not realize how valuable this course was, until I made 2 interews to apply for job. The first one was delighted by my skill level, and the second one...</h3>
              <h3>{diff} Month</h3>              
            </div>
          </div>
       </div>
        <div className={styles.cont_curso}>
                <div className={styles.contaimerTitle}>
                    <h1>{course.Title}</h1>
                </div>
                <button>Join</button>
                <h2>This Course includes</h2>
                <h3>Money Back Guarantee</h3>
                <h3>Access on all devices</h3>
                <h3>Certification of completion</h3>
                <h3>32 Moduls</h3>
                <hr />
                <h2>You'll learn</h2>
                <h3>Class, lauched less than a year ago by blackboard co-founder Michael Chasen, integrates exclusively</h3>
                <BsGithub color="#171515"/> &nbsp;
                <BsLinkedin color="#0e76a8"/>
        </div>
        <div className={styles.cont_cursos_similares}>
                <div className={styles.Img_curso_similar}>{course.Image}</div>
                <h2>{course.Title}</h2>
                <div className={styles.containerSummary}>
                    <div className={styles.category_duration}>
                      <h4><AiOutlineAppstore size="15px"/>&nbsp;Design</h4>
                      <h4><AiOutlineClockCircle size="15px"/>&nbsp;3 Month ago</h4>
                    </div>

                    <h2>Aws Certified solutions Architect</h2>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quibusdam esse corporis exercitationem illo tempore</div>
                    <div><img src="" alt="foto_estudiante" /></div>
                    <h4>Giulana</h4>
                    <button>Join</button>
                </div>            
        </div>
            {/* <div className={styles.containerBtn}>
                <Link to={`/detail/${props.id}`}><button>Study</button></Link>
            </div> */}
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