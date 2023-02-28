import { Route, Routes, Link } from 'react-router-dom'
import { BannedUsers, Instructors, Students, Admins } from '../index'
import styles from './Users.module.css'

function Users() {
    return (
        <>
            <div className={styles.users_container}>
                <div className={styles.users_options}>
                    <Link to={'/dashboard/advuser/users/students'}>students</Link>
                    <Link to={'/dashboard/advuser/users/admins'}>admins</Link>
                    <Link to={'/dashboard/advuser/users/intructors'}>intructors</Link>
                    <Link to={'/dashboard/advuser/users/bannedusers'}>banned users</Link>
                </div>
                <div className={styles.users_table}>
                    <Routes>
                        <Route path='/' element={<h2>Users</h2>}></Route>
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