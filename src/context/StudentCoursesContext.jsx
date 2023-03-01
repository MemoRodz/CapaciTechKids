import axios from "axios";
import { useState, useEffect, createContext } from 'react'
import { useSelector } from "react-redux";
import { baseUrl } from '../models/baseUrl'

export const StudentCoursesContext = createContext()

export function StudentCoursesProvider({ children }) {
    const studentCoursesInitialState = {
        myCourses: []
    }
    const [studentCourses, setStudentCourses] = useState(studentCoursesInitialState)
    const userId = useSelector(state => state.user.userId)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const studentCourses = await axios.get(`${baseUrl}/courses/`) // esta url deberia traer los courses del student pasando su userId
                setStudentCourses({
                    ...studentCoursesInitialState,
                    myCourses: studentCourses.data
                })
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return (
        <StudentCoursesContext.Provider value={{ studentCourses, setStudentCourses }}>
            {children}
        </StudentCoursesContext.Provider>
    )
}