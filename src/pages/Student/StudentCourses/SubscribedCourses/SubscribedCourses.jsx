import { useContext } from 'react'

import { StudentCourse } from '../../index'
import { StudentCoursesContext } from '../../../../context/StudentCoursesContext'
import styles from './SubscribedCourses.module.css'

function SubscribedCourses() {
    const courses = useContext(StudentCoursesContext)

    return (
        <>
            {courses && courses.map((c) => (
                <StudentCourse {...c} />
            ))}
        </>
    )
}

export default SubscribedCourses