import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import styles from './Teacher.module.css'
import { TeacherCourses, Create, TeacherProfile } from '../Teacher/index'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function Teacher() {
  const navigate = useNavigate()
  const userInfo = useSelector(state => state.user)
  console.log(userInfo)

  useEffect(() => {
    if (userInfo.userRole !== 'instructor') {
      navigate('/')
    }
  }, [])

  return (
    <>
      <div className={styles.teacher_container}>
        <div className={styles.teacher_sidebar}>
          <h2>Instructor </h2>
          <Link to={'/dashboard/instructor/'}>Mi perfil</Link>
          <Link to={'/dashboard/instructor/create'} >Crea un curso</Link>
          <Link to={'/dashboard/instructor/courses'}>Mis cursos</Link>
        </div>
        <div className={styles.teacher_views}>
          <Routes>
            <Route path='/' element={<TeacherProfile />} />
            <Route path='/courses' element={<TeacherCourses />} />
            <Route path='/create' element={<Create />} />
            <Route path='*' element={<h2>Not Found</h2>} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default Teacher