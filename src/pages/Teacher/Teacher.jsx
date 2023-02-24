import {Link} from 'react-router-dom'
import styles from './Teacher.module.css'
import DeletedCourses from './DeletedCourses/DeletedCourses'
import ActiveCourses from './ActiveCourses/ActiveCourses'

function Teacher() {

  return (
    <>
      <div>
        <h2>Nombre: </h2>
        <div className="sidebar">
        <Link to={'/dashboard/teacher/create'}>Crea un curso</Link>
        <DeletedCourses/>
        <ActiveCourses/>
        </div>
      </div>
    </>
  )
}

export default Teacher