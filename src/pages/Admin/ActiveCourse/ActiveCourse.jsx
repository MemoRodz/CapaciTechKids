import { useContext } from 'react';
import styles from './ActiveCourse.module.css'
import { FaRegClock, FaThLarge } from "react-icons/fa";
import { AdminCoursesContext } from '../../../context/AdminCoursesContext'
import { baseUrl } from '../../../models/baseUrl'
import axios from 'axios';
import { usuario } from '../../../component/Layout/Nav/Nav';
import { Link } from 'react-router-dom';

export default function ActiveCourse(props) {
  const { setAdminCourses, adminCourses } = useContext(AdminCoursesContext)
  const { Title, Description, Image, Score, PK_Course, Duration } = props

  const handleDelete = async (id) => {
    try {
      const response = await axios.put(`${baseUrl}/courses/detail/${id}/delete`)
      console.log(response);
      const deletedCourses = await axios.get(`${baseUrl}/courses/deleted`)
      const activeCourses = await axios.get(`${baseUrl}/courses`)
      setAdminCourses({
        ...adminCourses,
        activeCourses: activeCourses.data,
        deletedCourses: deletedCourses.data
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.card}>
      <Link to={`../../../detail/${PK_Course}`}>
      <button onClick={() => handleDelete(PK_Course)} className={styles.activeBtn}>x</button>
      <img className={styles.img} src={Image} alt={Image} />
      <div className={styles.coursedet}>
        {/* <div className={styles.similar1}>
           <FaThLarge /> 
          <h4>{adminCourses.tblCategories.Name}</h4>
        </div> */}
        <div className={styles.similar2}>
          <FaRegClock />
          <h4> {Duration} Min.</h4>
        </div>
      </div>
      <div className={styles.cardtit}><h1>{Title}</h1></div>
      <div className={styles.teach}>
        {/* <img src="..\img\image 12.png" alt="perfil" /> */}
        {/* <h3>{tblUser.Name}</h3> */}
        <div className={styles.btndetail}>
        </div>
      </div>
      </Link>
    </div>
  )
}