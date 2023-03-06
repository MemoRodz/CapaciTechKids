import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import SubiendoImagenes from '../../../component/Upload/Upload'
import {baseUrl} from '../../../models/baseUrl'
import axios from 'axios'
import { setUserInfo } from '../../../redux/slices/userSlice'
import { useDispatch } from 'react-redux'
import styles from './AdminProfile.module.css'

function AdminProfile() {
  const userInfo = useSelector(state => state.user)

  const dispatch = useDispatch()
    
    const [showForm, setShowForm] = useState(false);
    const [userData, setUserData] = useState({ 
        Name : "",
        Image : "",
        PK_User : userInfo.ID,
    });

    const [updatedUserData, setUpdatedUserData] = useState({ 
        Name : "",
        Image : "",
        PK_User : userInfo.ID,
    });

    function cambiarImagen(img) {
        setUserData({...userData, Image : img})
    }

    function handleChange(e) {
        setUserData({...userData, [e.target.name]: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.put(`${baseUrl}/users/putusers`, userData)
            .then(() => {
                setUpdatedUserData(userData);
                setShowForm(false);
            const fetchData = async () => {
                    const response = await axios.get(`${baseUrl}/users/${userInfo.ID}`)
                    // console.log("dentro de fetchdata",response.data)
                     dispatch(setUserInfo(response.data))} // Aqui preguntarle a Agus que si lo está haciendo. 
                     fetchData()
                    //aca hay que vaciar los inputs
                     alert("Has modificado tu perfil satisfactoriamente")
            })
            .catch(error => {
                console.log(error);
            });
    }

    const handleButtonClick = () => {
        setShowForm(true);
    }

    useEffect(() => {
        setUserData(updatedUserData);
    }, [updatedUserData]);



  return (
    <>
      <div className={styles.admin_profile}>
      <form onSubmit={handleSubmit}>
                        <div>
                        <label>Agrega tu nuevo nombre:</label>
                            <input  
                                style={{width:"500px"}} 
                                name="Name" 
                                type="text"
                                placeholder='Ingrese su nuevo nombre'
                                value={userData.Name} 
                                onChange={handleChange}></input>
                        </div>
                        <br></br>
                        <label>Agrega tu nueva imagen: </label>
                        <div>
                            <SubiendoImagenes cambiarImagen={cambiarImagen} />
                        </div>
                        <br></br>
                        <button type="submit">Enviar cambios</button>
                    </form>
      </div>
    </>
  )
}

export default AdminProfile