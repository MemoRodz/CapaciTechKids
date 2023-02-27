import React from 'react'
import { TeacherCoursesProvider } from '../../../context/TeacherCoursesContext'
import {DeletedCourses, ActiveCourses} from '../index'
import styles from './TeacherCourses.module.css'

function TeacherCourses() {
    return (
        <div className={styles.teacher_courses}>
            <TeacherCoursesProvider>
                <DeletedCourses />
                <ActiveCourses />
            </TeacherCoursesProvider>
        </div>
    )
}

export default TeacherCourses