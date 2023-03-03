import { NavLink, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react';
import { useLocalStorage } from '../../../hooks/useLocalStorage'
import { setUserInfo } from '../../../redux/slices/userSlice'
import { LoginButton, LogoutButton, Profile } from '../../../component'
import styles from './Nav.module.css'
import { useEffect } from 'react';
import { baseUrl } from '../../../models/baseUrl'

export let usuario = ""

function Nav() {

  const { isAuthenticated } = useAuth0();

  const { storedUser } = useLocalStorage()
  const dispatch = useDispatch()
  const userInfo = useSelector(state => state.user)

  useEffect(() => {
    if (storedUser && !userInfo.email) {
      const fetchData = async () => {
        try {
          const response = await axios.post(`${baseUrl}/users/registro`, storedUser)
          if (typeof (response.data) !== "string") {
            dispatch(setUserInfo(response.data))
            usuario = response.data.PK_User;
          }
          else {
            const response = await axios.get(`${baseUrl}/users/`)
            const dBUser = response.data.find(ele => ele.Email === storedUser.Email)
            dispatch(setUserInfo(dBUser))
          }
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }
  }, [storedUser, userInfo.email])

  return (
    <>
      <nav className={styles.navbar} >
        <ul>
          <li><NavLink to={"/"} >Inicio</NavLink></li>
          <li><NavLink to={"/course"} >Cursos</NavLink></li>
          <li><NavLink to={"/donate"} >Donaciones</NavLink></li>
          <li><NavLink to={"/about"} >Nosotros</NavLink></li>
          {/* <li><NavLink to={"/about"} style={({isActive}) => isActive ? activeStyle : inactiveStyle}>About</NavLink></li> */}
          {userInfo.userRole && <li><NavLink to={`/dashboard/${userInfo.userRole}`}>Panel</NavLink></li>}
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