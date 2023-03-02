import React from 'react'
import { AdminCoursesProvider } from '../../../context/AdminCoursesContext'
import {DeletedCourses, ActiveCourses} from '../index'
import styles from './AdminCourses.module.css'

function AdminCourses() {
    return (
        <div className={styles.advuser_courses}>
            <AdminCoursesProvider>
                <DeletedCourses />
                <ActiveCourses />
            </AdminCoursesProvider>
        </div>
    )
}

export default AdminCourses