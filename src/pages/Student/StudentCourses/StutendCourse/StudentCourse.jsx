import { FaRegClock, FaThLarge } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styles from './StudentCourse.module.css'
// este componente es una card
function StudentCourse(course) {

    return (
        <div className={styles.card}>
      <Link className={styles.linkcard} to={`/detail/${course.PK_Course}`}>

      <img className={styles.img} src={course.Image} alt={course.Image} />

      <div className={styles.coursedet}>
        <div className={styles.similar1}>
          {/* <FaThLarge />
          {console.log(course)} */}
          {/* {course.tblCategories.map((category) => (
  <h4 key={category.PK_Category}>{`${category.Name} `} </h4>
))} */}

        </div>
        <div className={styles.similar2}>
          <FaRegClock />
          <h4>{course.Duration} Min.</h4>
        </div>
      </div>
      <div className={styles.cardtit}><h1>{course.Title}</h1></div>
      {/* <div className={styles.teach}>
        <img src="..\img\image 12.png" alt="perfil" /> */}

        {/* <h3>{course.tblUsers.Name}</h3> */}
        {/* <div className={styles.btndetail}>
          <Link to={`/detail/${course.PK_Course}`}><button>Detail</button></Link>
        </div> */}

      {/* </div> */}
    </Link>
    </div>
    )
}

export default StudentCourse