import { useContext } from 'react'
import { TeacherCoursesContext } from '../../../context/TeacherCoursesContext'
import DeleteCourse from "../DeleteCourse/DeleteCourse";
import styles from "./DeletedCourses.module.css";


export default function DeletedCourses() {
  const { teacherCourses } = useContext(TeacherCoursesContext)

  return (
    <>
      <div className={styles.deleted_courses_container}>
        <h2>Deleted Courses</h2>
        <div className={styles.deleted_courses}>
          {teacherCourses.deletedCourses && teacherCourses.deletedCourses.map((c, i) => (
            <DeleteCourse {...c} key={`${c.PK_Course}-deleted`}/>
          )
          )}
        </div>
      </div>
    </>
  );
}