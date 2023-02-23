import { Navigate, Route, Routes } from 'react-router-dom'
import { Student, Teacher } from '../index'

function Dashboard() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Navigate to={'/'} />} />
                <Route path='/student' element={<Student />} />
                <Route path='/teacher' element={<Teacher />} />
                <Route path='*' element={<h2>Not Found</h2>} />
            </Routes>
        </>
    )
}

export default Dashboard