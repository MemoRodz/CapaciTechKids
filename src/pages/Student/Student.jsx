import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Routes, Route, Link } from "react-router-dom"

import styles from './Student.module.css'
import { StudentProfile, StudentCourses, SubscribedCourses } from './index'
import { StudentCoursesProvider } from '../../context/StudentCoursesContext'

function Student() {
  const navigate = useNavigate()
  const userInfo = useSelector(state => state.user)

  useEffect(() => {
    if (userInfo.userRole !== 'student') {
      navigate('/')
    }
  }, [])

  return (
    <>
     <StudentCoursesProvider>
      <div className={styles.student_container}>
        <div className={styles.student_sidebar}>
          <Link to={'/dashboard/student/'}>Mi perfil</Link>
          <Link to={'/dashboard/student/courses'}>Mis cursos</Link>
        </div>
        <div className={styles.student_views}>
          <Routes>
            <Route path='/' element={<StudentProfile />}></Route>
            <Route path='/courses' element={<SubscribedCourses />}></Route>
          </Routes>
        </div>
      </div>
      </StudentCoursesProvider>
    </>
  )
}

export default Student