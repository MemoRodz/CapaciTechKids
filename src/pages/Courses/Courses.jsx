import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react'
import Course from "../../component/Course/Course";
import styles from "./Courses.module.css";
import { CategoryFilter, SortByScore, ResetFilters } from '../../component/index'
import { getAllCategories } from "../../redux/slices/categoriesSlice";
import { setAllCourses } from '../../redux/slices/coursesSlice'
import { baseUrl } from '../../models/baseUrl'
import { useCourses } from "../../hooks/useCourses";


export default function Courses() {
  const dispatch = useDispatch()
  const { isError, isLoading, data } = useCourses()
  useEffect(() => {
    dispatch(getAllCategories(`${baseUrl}/categories`))
    data && dispatch(setAllCourses(data))  // dispatch(getAllCourses(`${baseUrl}/courses`)) <== esta es la implementacion vieja
  }, [data])

  const arregloCourses = useSelector(state => state.courses.filteredCourses)
 

  return (
    <>
      <div className={styles.heard}>
        <img src="https://res.cloudinary.com/dbbmgnhqf/image/upload/v1677262061/CAPACITECHKIDS/images/project/ca3_ixldy5.jpg" />
      </div>
      <h1 className={styles.coursestitle}>Nuestros Cursos</h1>
      <div className={styles.coursescontainer}>
        <div className={styles.filters}>
          <CategoryFilter />
          <SortByScore />
          <ResetFilters />
        </div>
        <div className={styles.courses}>
          {arregloCourses && arregloCourses.map((c, i) => (
            <Course PK_Course={c.PK_Course} />
          )
          )}
        </div>
      </div>
    </>
  );
}