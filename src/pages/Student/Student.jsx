import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Routes, Route, Link } from "react-router-dom"

import styles from './Student.module.css'
import { StudentProfile, StudentCourses } from './index'

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
      <div className={styles.student_container}>
        <div className={styles.student_sidebar}>
          <Link to={'/dashboard/student/'}>Mi perfil</Link>
          <Link to={'/dashboard/student/courses'}>Mis cursos</Link>
        </div>
        <Routes>
          <Route path='/' element={<StudentProfile />}></Route>
          <Route path='/courses' element={<StudentCourses />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default Student