import { Routes, Route, Link } from 'react-router-dom'
import { Users, AdminCourses, AdminProfile, NotificationAdmin } from './index'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styles from './Admin.module.css'

function Admin() {
    const userInfo = useSelector(state => state.user)

    useEffect(() => {
        if (userInfo.userRole !== 'advuser') {
            navigate('/')
        }
    }, [])

    return (
        <>
            <div className={styles.admin_container}>
                <h2>Admin panel</h2>
                <div className={styles.admin_sidebar}>
                    <Link to={'/dashboard/advuser'}>Mi perfil</Link>
                    <Link to={'/dashboard/advuser/users/students'}>Usuarios</Link>
                    <Link to={'/dashboard/advuser/admincourses'}>Cursos</Link>
                    <Link to={'/advuser/notificaadmin'}>Aviso a Estudiantes</Link>
                </div>
                <div>
                    <Routes>
                        <Route path='/' element={<AdminProfile />}></Route>
                        <Route path='/users/*' element={<Users />}></Route>
                        <Route path='/admincourses' element={<AdminCourses />}></Route>
                        <Route path='/notificationadmin' element={<NotificationAdmin />}></Route>
                        <Route path='*' element={<h2>Not Found</h2>} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default Admin