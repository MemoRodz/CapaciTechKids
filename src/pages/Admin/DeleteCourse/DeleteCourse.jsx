import styles from './DeleteCourse.module.css'
import { FaRegClock, FaThLarge } from "react-icons/fa";
import { AdminCoursesContext } from '../../../context/AdminCoursesContext'
import axios from 'axios';
import { useContext } from 'react';
import { baseUrl } from '../../../models/baseUrl'
import { usuario } from '../../../component/Layout/Nav/Nav';
import { Link } from 'react-router-dom';

export default function DeleteCourse(props) {
  const { setAdminCourses, adminCourses } = useContext(AdminCoursesContext)
  const { Title, Description, Image, Score, PK_Course, Duration } = props


  const handleActivate = async (id) => {
    try {
      const response = await axios.put(`${baseUrl}/courses/detail/${id}/activate`)
      console.log(response);
      const activeCourses = await axios.get(`${baseUrl}/courses`)
      const deletedCourses = await axios.get(`${baseUrl}/courses/deleted`)
      setAdminCourses({
        deletedCourses: deletedCourses.data,
        activeCourses: activeCourses.data
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.card}>
      <button onClick={() => handleActivate(PK_Course)} className={styles.deleteBtn}>x</button>
      <Link to={`../../../detail/${PK_Course}`}>  
    <img className={styles.img} src={Image} alt={Image} />
      <div className={styles.coursedet}>
        {/* <div className={styles.similar1}>
          <FaThLarge />
          <h4>{tblCategories[0].Name}</h4> 
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
      </Link >
    </div>
  )
}