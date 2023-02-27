import { NavLink, useLocation } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import axios from 'axios'

import styles from './Nav.module.css'
import { useLocalStorage } from '../../../hooks/useLocalStorage'
import { setUserInfo } from '../../../redux/slices/userSlice'


function Nav() {
  const location = useLocation()
  const { storedUser } = useLocalStorage()
  const dispatch = useDispatch()

  if(storedUser){
    const fetchData = async () => {
      try {
        const response = await axios.post(`http://localhost:3001/users/registro`, storedUser)
        if (typeof (response.data) !== "string") {
          dispatch(setUserInfo(response.data))
          console.log(response.data, '++++')
        }
        else {
          const response = await axios.get(`http://localhost:3001/users/`)
          const dBUser = response.data.find(ele => ele.Email === storedUser.Email)
          dispatch(setUserInfo(dBUser))
          console.log(dBUser, '>>>>')
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }

  let activeStyle = {
    color: location.pathname === '/' ? 'white' : 'black'
  }

  let inactiveStyle = {
    color: location.pathname === '/' ? 'white' : 'black'
  }

  let navStyle = {
    backgroundColor: location.pathname === '/' ? '#0583F2' : 'transparent'
  }

  return (
    <>
      <nav className={styles.navbar} style={navStyle}>
        <ul>
          <li><NavLink to={"/"} style={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Inicio</NavLink></li>
          <li><NavLink to={"/course"} style={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Cursos</NavLink></li>
          <li><NavLink to={"/donate"} style={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Donaciones</NavLink></li>
          <li><NavLink to={"/about"} style={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Nosotros</NavLink></li>
          {/* <li><NavLink to={"/about"} style={({isActive}) => isActive ? activeStyle : inactiveStyle}>About</NavLink></li> */}
          <li><NavLink to={"/about"} style={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Nosotros</NavLink></li>
          <li><NavLink to={"/dashboard/instructor"}>Instructor</NavLink></li>
        </ul>
      </nav>
    </>
  )
}

export default Nav