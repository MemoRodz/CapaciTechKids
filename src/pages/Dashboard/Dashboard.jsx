import { Navigate, Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import { Student, Teacher } from '../index'
import Create from '../Teacher/Create/Create'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function Dashboard() {
    const location = useLocation()
    const navigate = useNavigate()

    const userRole = useSelector((state) => state.user.userRole)

    useEffect(() => {
        if(location.pathname !== `/dashboard/${userRole}` && location.pathname !== `/dashboard/${userRole}/create`){
            navigate('/')
        }
    }, [location])
    
    return (
        <>
            <Routes>
                <Route path='/' element={<Navigate to={'/'} />} />
                <Route path='/student' element={<Student />} />
                <Route path='/teacher' element={<Teacher />} />
                <Route path='/teacher/create' element={<Create />} />
            </Routes>
        </>
    )
}

export default Dashboard