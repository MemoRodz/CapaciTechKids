import { useEffect, useState } from 'react'
import DeleteCourse from "../DeleteCourse/DeleteCourse";
import styles from "./DeletedCourses.module.css";
import axios from "axios";


export default function DeletedCourses() {
  const [deletedCourses, setDeletedCourses] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/courses/deleted')
    .then(res => setDeletedCourses(res.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <>
      <div className={styles.coursescontainer}>
        <div className={styles.courses}>
          {deletedCourses && deletedCourses.map((c, i) => (
            <DeleteCourse {...c} />
          )
          )}
        </div>
      </div>
    </>
  );
}