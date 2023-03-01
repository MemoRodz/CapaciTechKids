import axios from 'axios'
import { useState, useEffect, createContext } from 'react'
import { baseUrl } from '../models/baseUrl'
import { usuario } from '../component/Layout/Nav/Nav'

export const AdvUserCoursesContext = createContext()

export function AdvUserCoursesProvider({ children }) {
    const advUserCoursesInitialState = {
        activeCourses: [],
        deletedCourses: []
    }
    const [advUserCourses, setAdvUserCourses] = useState(advUserCoursesInitialState)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const delCourses = await axios.get(`${baseUrl}/courses/deleted`)
                const courses = await axios.get(`${baseUrl}/courses`)
                setAdvUserCourses({
                    ...advUserCoursesInitialState,
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