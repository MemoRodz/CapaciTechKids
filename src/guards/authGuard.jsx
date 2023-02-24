import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

function AuthGuard() {
    const userState = useSelector((state) => state.user) //objeto del store con la info del user

    return (userState.isLogged ? <Outlet /> : <Navigate replace to={'/'}/>)
}

export default AuthGuard