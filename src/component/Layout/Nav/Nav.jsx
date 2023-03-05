import { NavLink, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react';
import { useLocalStorage } from '../../../hooks/useLocalStorage'
import { setUserInfo } from '../../../redux/slices/userSlice'
import { LoginButton, LogoutButton, Profile } from '../../../component'
import styles from './Nav.module.css'
import { useEffect, useState } from 'react';
import { baseUrl } from '../../../models/baseUrl'
import { FaBars, FaTimes } from 'react-icons/fa';
import userSlice from '../../../redux/slices/userSlice';
export let usuario = ""

function Nav() {

  const { isAuthenticated } = useAuth0();

  const { storedUser } = useLocalStorage()
  const dispatch = useDispatch()
  const userInfo = useSelector(state => state.user)
  // console.log("cambio en nav",userInfo)


  // console.log("USER", userInfo)

  useEffect(() => {
    if (storedUser) {
      const fetchData = async () => {
        try {
          const response = await axios.post(`${baseUrl}/users/registro`, storedUser)
            dispatch(setUserInfo(response.data))
            // usuario = response.data.PK_User;
            usuario = userInfo.ID;
       
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }
  }, [storedUser])


  const [showMenu, setShowMenu] = useState(false);


  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header>
        <div className={styles.navcontainer}>
          <nav className={styles.navbar} >
            <div className={styles.logo}>
              <NavLink to={"/"} ><img src="https://res.cloudinary.com/dbbmgnhqf/image/upload/v1677858290/CAPACITECHKIDS/images/project/app4pvg49uoozghx4diy.png" alt="logo" /></NavLink>
            </div>
            <div className={styles.menu}>
              <div className={styles.toggle} onClick={handleToggleMenu}>
                {showMenu ? <FaTimes /> : <FaBars />}
              </div>
              <ul className={showMenu ? styles.menuItemsActive : styles.menuItems}>
                <li><NavLink to={"/"} onClick={handleToggleMenu} className={styles.active}>Inicio</NavLink></li>
                <li><NavLink to={"/course"} onClick={handleToggleMenu} >Cursos</NavLink></li>
                <li><NavLink to={"/donate"} onClick={handleToggleMenu} >Donaciones</NavLink></li>
                <li><NavLink to={"/about"} onClick={handleToggleMenu} >Nosotros</NavLink></li>
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
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}


export default Nav