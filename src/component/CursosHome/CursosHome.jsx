import React from 'react'
import Course from '../Course/Course'
import styles from './CursosHome.module.css'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react'
import { setAllCourses } from '../../redux/slices/coursesSlice'
import { baseUrl } from '../../models/baseUrl'
import { useCourses } from "../../hooks/useCourses";
import axios from 'axios';

export default function CursosHome() {

    // const dispatch = useDispatch()
    // const { isError, isLoading, data } = useCourses()
    // useEffect(() => {
    //     dispatch(setAllCourses(data))  // dispatch(getAllCourses(`${baseUrl}/courses`)) <== esta es la implementacion vieja
    // }, [data])
  
    // const arregloCourses = useSelector(state => state.courses.filteredCourses)
   
    // const curso1 = axios.get(`${baseUrl}/courses/detail/1`)
    // const curso2 = axios.get(`${baseUrl}/courses/detail/2`)
    // const curso3 = axios.get(`${baseUrl}/courses/detail/3`)




  return (
    <>
    <div className={styles.cursospopulares}>Estos son algunos de nuestros cursos más populares:</div>
             <div className={styles.cardscursos}>
             <Course PK_Course={'21'} />
             <Course PK_Course={'23'} />
             {/* <Course PK_Course={'5'} /> */}
             {/* <Course PK_Course={'6'} /> */}
             <Course PK_Course={'18'} />
             <Course PK_Course={'14'} />
        
            
             </div>
    </>
  )
}

