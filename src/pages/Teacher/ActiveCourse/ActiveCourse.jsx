import { useContext } from 'react';
import styles from './ActiveCourse.module.css'
import { FaRegClock, FaThLarge } from "react-icons/fa";
import { TeacherCoursesContext } from '../../../context/TeacherCoursesContext'
import axios from 'axios';


export default function ActiveCourse(props) {
  const { setTeacherCourses, teacherCourses } = useContext(TeacherCoursesContext)
  const { Title, Description, Image, Score, PK_Course, Duration } = props

  const handleDelete = async (id) => {
    try {
      const response = await axios.put(`/courses/detail/${id}/delete`)
      console.log(response);
      const deletedCourses = await axios.get('/courses/deleted')
      const activeCourses = await axios.get('/courses/')
      setTeacherCourses({
        ...teacherCourses,
        activeCourses: activeCourses.data,
        deletedCourses: deletedCourses.data
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.card}>
      <button onClick={() => handleDelete(PK_Course)} className={styles.activeBtn}>x</button>
      <img className={styles.img} src={Image} alt={Image} />
      <div className={styles.coursedet}>
        <div className={styles.similar1}>
          <FaThLarge />
          {/* <h4>{tblCategories[0].Name}</h4> */}
        </div>
        <div className={styles.similar2}>
          <FaRegClock />
          <h4>{Duration / 3600}h</h4>
        </div>
      </div>
      <div className={styles.cardtit}><h1>{Title}</h1></div>
      <div className={styles.teach}>
        {/* <img src="..\img\image 12.png" alt="perfil" /> */}
        {/* <h3>{tblUser.Name}</h3> */}
        <div className={styles.btndetail}>
        </div>
      </div>
    </div>
  )
}