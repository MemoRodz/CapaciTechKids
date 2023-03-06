import { Navigate, Route, Routes } from 'react-router-dom'
import { Student, Teacher, Admin } from '../index'

function Dashboard() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Navigate to={'/'} />} />
                <Route path='/student' element={<Student />} />
                <Route path='/instructor/*' element={<Teacher />} />
                <Route path='/advuser/*' element={<Admin/>}/>
                <Route path='*' element={<h2>Not Found</h2>}/>
            </Routes>
            
        </>
    )
}

export default Dashboard