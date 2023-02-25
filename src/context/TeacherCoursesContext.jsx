import axios from 'axios'
import { useState, useEffect, createContext } from 'react'

export const TeacherCoursesContext = createContext()

export function TeacherCoursesProvider({ children }) {
    const teacherCoursesInitialState = {
        activeCourses: [],
        deletedCourses: []
    }
    const [teacherCourses, setTeacherCourses] = useState(teacherCoursesInitialState)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const delCourses = await axios.get('http://localhost:3001/courses/deleted')
                const courses = await axios.get('http://localhost:3001/courses/')
                setTeacherCourses({
                    ...teacherCoursesInitialState,
                    activeCourses: courses.data,
                    deletedCourses: delCourses.data
                })
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return (
    <TeacherCoursesContext.Provider value={{teacherCourses, setTeacherCourses}}>
        {children}
    </TeacherCoursesContext.Provider>
    )
}