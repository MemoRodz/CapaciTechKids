import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import styles from './Teacher.module.css'
import { TeacherCourses, Create } from '../Teacher/index'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function Teacher() {
  const navigate = useNavigate()
  const userInfo = useSelector(state => state.user)
  console.log(userInfo)

  useEffect(()=>{
    if(userInfo.userRole !== 'instructor'){
      navigate('/')
    }
  },[])

  return (
    <>
      <div className={styles.teacher_container}>
        <div className={styles.teacher_sidebar}>
          <h2>Instructor </h2>
          <Link to={'/dashboard/instructor/create'} >Crea un curso</Link>
          <Link to={'/dashboard/instructor/'}>Mis cursos</Link>
        </div>
        <Routes>
          <Route path='/' element={<TeacherCourses />} />
          <Route path='/create' element={<Create />} />
          <Route path='*' element={<h2>Not Found</h2>} />
        </Routes>
      </div>
    </>
  )
}

export default Teacher