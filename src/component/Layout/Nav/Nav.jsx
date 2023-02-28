import { NavLink, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react';
import { useLocalStorage } from '../../../hooks/useLocalStorage'
import { setUserInfo } from '../../../redux/slices/userSlice'
import { LoginButton, LogoutButton, Profile } from '../../../component'
import styles from './Nav.module.css'
import { useEffect } from 'react';
import {baseUrl} from '../../../models/baseUrl'

function Nav() {

  const { isAuthenticated } = useAuth0();

  const location = useLocation()
  const { storedUser } = useLocalStorage()
  const dispatch = useDispatch()
  const userInfo = useSelector(state => state.user)

  useEffect(()=>{
    if (storedUser && !userInfo.email) {
      const fetchData = async () => {
        try {
          const response = await axios.post(`${baseUrl}/users/registro`, storedUser)
          if (typeof (response.data) !== "string") {
            dispatch(setUserInfo(response.data))
            console.log(response.data, '++++')
          }
          else {
            const response = await axios.get(`${baseUrl}/users/`)
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
  },[storedUser, userInfo.email])

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
          <li><NavLink to={"/"} style={({isActive}) => isActive ? activeStyle : inactiveStyle}>Inicio</NavLink></li>
          <li><NavLink to={"/course"} style={({isActive}) => isActive ? activeStyle : inactiveStyle}>Cursos</NavLink></li>
          <li><NavLink to={"/donate"} style={({isActive}) => isActive ? activeStyle : inactiveStyle}>Donaciones</NavLink></li>
          <li><NavLink to={"/about"} style={({isActive}) => isActive ? activeStyle : inactiveStyle}>Nosotros</NavLink></li>
          {/* <li><NavLink to={"/about"} style={({isActive}) => isActive ? activeStyle : inactiveStyle}>About</NavLink></li> */}
          {userInfo.userRole && <li><NavLink to={`/dashboard/${userInfo.userRole}`}>Perfil {userInfo.userRole}</NavLink></li>}
          <div className={styles.login}>

            {isAuthenticated ? <>
            <div className={styles.acord}>
              <details className={styles.det}>
                <summary><Profile /></summary>
                <LogoutButton />
              </details>
            </div>
              
              
            </>
              :
              <>
                <LoginButton />
              </>
            }

          </div>
        </ul>
      </nav>
    </>
  )
}

export default Nav