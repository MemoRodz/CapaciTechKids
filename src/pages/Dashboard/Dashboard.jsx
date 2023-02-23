import { Navigate, Route } from 'react-router-dom'
import { Student, Teacher } from '../index'

function Dashboard() {
    return (
        <>
            <Route path='/' element={<Navigate to={'/dashboard'} />} />
            <Route path='/student' element={<Student />} />
            <Route path='/teacher' element={<Teacher />} />
        </>
    )
}

export default Dashboard