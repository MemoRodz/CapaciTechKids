import styles from './StudentCourses.module.css'
import { StudentCoursesProvider } from '../../../context/StudentCoursesContext'
import { SubscribedCourses } from '../index'

function StudentCourses() {
  return (
    <>
      <StudentCoursesProvider>
        <SubscribedCourses />
      </StudentCoursesProvider>
    </>
  )
}

export default StudentCourses