import { useContext } from 'react'
import { TeacherCoursesContext } from '../../../context/TeacherCoursesContext'
import ActiveCourse from "../ActiveCourse/ActiveCourse";
import styles from "./ActiveCourses.module.css";


export default function ActiveCourses() {
  const { teacherCourses } = useContext(TeacherCoursesContext)
  
  return (
    <>
      <div className={styles.active_courses_container}>
        <h2>Active Courses</h2>
        <div className={styles.active_courses}>
          {teacherCourses.activeCourses && teacherCourses.activeCourses.map((c, i) => (
            <ActiveCourse {...c} key={`${c.PK_Course}-active`}/>
          )
          )}
        </div>
      </div>
    </>
  );
}