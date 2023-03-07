import { useContext } from 'react'

import { StudentCourse } from '../../index'
import { StudentCoursesContext, StudentCoursesProvider } from '../../../../context/StudentCoursesContext'
import styles from './SubscribedCourses.module.css'

function SubscribedCourses() {
    const { studentCourses } = useContext(StudentCoursesContext)

    return (
        <>
            <StudentCoursesProvider>

        <h2> Te has suscripto a los siguientes cursos:</h2>
        {studentCourses.myCourses.length ? studentCourses.myCourses.map((c) => (
    <StudentCourse {...c} />
)) : <h2>No estas suscripto a un curso</h2>}

        </StudentCoursesProvider>
        </>
    )
}

export default SubscribedCourses