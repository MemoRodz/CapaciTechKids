import { useContext } from 'react'
import { AdminCoursesContext } from '../../../context/AdminCoursesContext'
import DeleteCourse from "../DeleteCourse/DeleteCourse";
import styles from "./DeletedCourses.module.css";


export default function DeletedCourses() {
  const { adminCourses } = useContext(AdminCoursesContext)

  return (
    <>
      <div className={styles.deleted_courses_container}>
        <h2>Deleted Courses</h2>
        <div className={styles.deleted_courses}>
          {adminCourses.deletedCourses && adminCourses.deletedCourses.map((c, i) => (
            <DeleteCourse {...c} key={`${c.PK_Course}-deleted`}/>
          )
          )}
        </div>
      </div>
    </>
  );
}