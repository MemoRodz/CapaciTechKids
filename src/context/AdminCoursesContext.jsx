import axios from 'axios'
import { useState, useEffect, createContext } from 'react'
import { baseUrl } from '../models/baseUrl'
// import { usuario } from '../component/Layout/Nav/Nav'

export const AdminCoursesContext = createContext()

export function AdminCoursesProvider({ children }) {
    const adminCoursesInitialState = {
        activeCourses: [],
        deletedCourses: []
    }
    const [adminCourses, setAdminCourses] = useState(adminCoursesInitialState)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const delCourses = await axios.get(`${baseUrl}/courses/deleted`)
                const courses = await axios.get(`${baseUrl}/courses`)
                setAdminCourses({
                    ...adminCoursesInitialState,
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
        <AdminCoursesContext.Provider value={{ adminCourses, setAdminCourses }}>
            {children}
        </AdminCoursesContext.Provider>
    )
}