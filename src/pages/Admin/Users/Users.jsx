import { Route, Routes, Link } from 'react-router-dom'
import { BannedUsers, Instructors, Students, Admins } from '../index'
import styles from './Users.module.css'

function Users() {
    return (
        <>
            <div className={styles.users_container}>
                <div className={styles.users_options}>
                    <Link to={'/dashboard/advuser/users/students'}>Estudiantes</Link>
                    <Link to={'/dashboard/advuser/users/admins'}>Administradores</Link>
                    <Link to={'/dashboard/advuser/users/intructors'}>Instructores</Link>
                    <Link to={'/dashboard/advuser/users/bannedusers'}>Usuarios Bloqueados</Link>
                </div>
                <div className={styles.users_table}>
                    <Routes>
                        <Route path='/' element={<h2></h2>}></Route>
                        <Route path='/admins' element={<Admins />}></Route>
                        <Route path='/intructors' element={<Instructors />}></Route>
                        <Route path='/students' element={<Students />}></Route>
                        <Route path='/bannedusers' element={<BannedUsers />}></Route>
                    </Routes>
                </div>

            </div>
        </>
    )
}

export default Users