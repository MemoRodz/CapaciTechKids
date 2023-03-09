import axios from "axios";
import { useState, useEffect, createContext } from 'react'
import { useSelector } from "react-redux";
import { baseUrl } from '../models/baseUrl'
import { usuario } from "../component/Layout/Nav/Nav";

export const StudentCoursesContext = createContext()

export function StudentCoursesProvider({ children }) {
    const userId = useSelector(state => state.user.userId)
    const studentCoursesInitialState = {
        myCourses: [],

    }
    const [studentCourses, setStudentCourses] = useState(studentCoursesInitialState)



    useEffect(() => {
        const fetchData = async () => {
            try {
                const studCourses = await axios.get(`${baseUrl}/users/user/${usuario}`) // esta url deberia traer los courses del student pasando su userId
                // console.log("22222222222222", studCourses.data.tblCourses)
                setStudentCourses({
                    ...studentCoursesInitialState,
                    myCourses: studCourses.data.tblCourses,
                })
                // console.log(myCourses)
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