import { useContext } from 'react'
import { AdminCoursesContext } from '../../../context/AdminCoursesContext'
import ActiveCourse from "../ActiveCourse/ActiveCourse";
import styles from "./ActiveCourses.module.css";


export default function ActiveCourses() {
  const { adminCourses } = useContext(AdminCoursesContext)
  
  return (
    <>
      <div className={styles.active_courses_container}>
        <h2>Active Courses</h2>
        <div className={styles.active_courses}>
          {adminCourses.activeCourses && adminCourses.activeCourses.map((c, i) => (
           // <Link to={`/detail/${c.PK_Course}`}>
            <ActiveCourse {...c} key={`${c.PK_Course}-active`}/>
            //</Link>
          )
          )}
        </div>
      </div>
    </>
  );
}