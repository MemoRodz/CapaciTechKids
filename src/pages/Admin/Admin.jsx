import { Routes, Route, Link } from 'react-router-dom'
import { Users, AdminCourses } from './index'
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
                    <Link to={'/dashboard/advuser/users'}>Usuarios</Link>
                    <Link to={'/dashboard/advuser/admincourses'}>Admin courses</Link>
                </div>
                <div className={styles.admin_views_container}>
                    <Routes>
                        <Route path='/' element={<h2>Admin Home</h2>}></Route>
                        <Route path='/users/*' element={<Users />}></Route>
                        <Route path='/admincourses' element={<AdminCourses />}></Route>
                        <Route path='*' element={<h2>Not Found</h2>} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default Admin