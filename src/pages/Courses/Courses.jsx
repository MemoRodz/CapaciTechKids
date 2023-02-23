import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react'
import Course from "../../component/Course/Course";
import styles from "./Courses.module.css";
import { CategoryFilter, ScoreFilter, SortByScore, ResetFilters } from '../../component/index'
import { getAllCourses } from '../../redux/slices/coursesSlice'
import { getAllCategories } from "../../redux/slices/categoriesSlice";



export default function Courses() {
  const dispatch = useDispatch()
  const arregloCourses = useSelector(state => state.courses.filteredCourses)
  console.log(arregloCourses)

  useEffect(() => {
    dispatch(getAllCourses('http://localhost:3001/courses'))
    dispatch(getAllCategories('http://localhost:3001/categories'))
  }, [])

  return (
    <>
      <div className={styles.heard}>
        <img src="..\img\Rectangle 77big.png" alt="{course.Title}" />
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
            <Course
              PK_Course={c.PK_Course}
              key={c.PK_Course}
              Image={c.Image}
              //Category={c.Category}
              Title={c.Title}
              Description={c.Description}
              Start_Date={c.Start_Date}
              End_Date={c.End_Date}
              Duration={c.Duration}
              Instructor={c.tblUser.Name}
              Score={c.Score}
            //onClose={() => props.onClose(c.id)}
            />
          )
          )}
        </div>
      </div>
    </>
  );
}