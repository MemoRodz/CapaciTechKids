import { useEffect, useState } from 'react'
import ActiveCourse from "../ActiveCourse/ActiveCourse";
import styles from "./ActiveCourses.module.css";
import axios from "axios";


export default function ActiveCourses() {
  const [activeCourses, setActiveCourses] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/courses/')
    .then(res => setActiveCourses(res.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <>
      <div className={styles.coursescontainer}>
        <div className={styles.courses}>
          {activeCourses && activeCourses.map((c, i) => (
            <ActiveCourse {...c} />
          )
          )}
        </div>
      </div>
    </>
  );
}