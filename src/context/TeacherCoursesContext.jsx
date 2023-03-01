import axios from 'axios'
import { useState, useEffect, createContext } from 'react'
import { baseUrl } from '../models/baseUrl'
import { usuario } from '../component/Layout/Nav/Nav'

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
                const delCourses = await axios.get(`${baseUrl}/courses/deleted/fromuser/${usuario}`)
                const courses = await axios.get(`${baseUrl}/courses/fromuser/${usuario}`)
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
        <TeacherCoursesContext.Provider value={{ teacherCourses, setTeacherCourses }}>
            {children}
        </TeacherCoursesContext.Provider>
    )
}