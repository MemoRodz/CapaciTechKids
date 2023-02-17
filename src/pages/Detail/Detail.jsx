import React, { useState, useEffect } from "react";
import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [course, setCourse] = useState([]);
  console.log(id);


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
        <div><h1>Hola</h1></div>
            <div className={styles.contaimerTitle}>
                    <h1>{course.Title}</h1>
                    <h2>{course.Categoria}</h2>
                </div>
                <div className={styles.containerImg}>{course.Image}</div>
                <div className={styles.containerSummary}>
                    <h2>{course.Instructor}</h2>
                    <h2>{course.Duration}</h2>
                    <h2>{course.Updated}</h2>
                </div>
            <div className={styles.containerDescription}>{course.Description}</div>
            <div className={styles.containerModules}>{course.Modules}</div>
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