import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styles from './StudentProfile.module.css'
import SubiendoImagenes from '../../../component/Upload/Upload'
import {baseUrl} from '../../../models/baseUrl'
import axios from 'axios'
import { setUserInfo } from '../../../redux/slices/userSlice'
import { useDispatch } from 'react-redux'
import swal from "sweetalert";


function StudentProfile() {
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
                    console.log("dentro de fetchdata",response.data)
                     dispatch(setUserInfo(response.data))} // Aqui preguntarle a Agus que si lo está haciendo. 
                     fetchData()
                    //aca hay que vaciar los inputs
                    swal({
                        title: "Has modificado tu perfil satisfactoriamente",
                        icon: "success",
                        button: "Cerrar",
                      });
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
        <div className={styles.editprofile}>
            {/* <div className={styles.student_profile}>
                <img src={userInfo.Image ? userInfo.Image : "Image Not Found"} alt="profile-image" height={200} width={200} />
                <h2>{userInfo.Name ? userInfo.Name : "Name?"}</h2>
            </div> */}
            {/* <button onClick={handleButtonClick}>Edit Profile</button> */}
            <div>
                {/* {showForm && ( */}
                    <form onSubmit={handleSubmit}>
                        <label>Agrega tu nuevo nombre:</label>
                        <input   
                            style={{width:"500px"}} 
                            name="Name" 
                            type="text"
                            required
                            value={userData.Name} 
                            onChange={handleChange}></input>
                        <br></br>
                        <label>Agrega tu nueva imagen: </label>
                        <div>
                            <SubiendoImagenes cambiarImagen={cambiarImagen} />
                        </div>
                        <br></br>
                        <button type="submit">Enviar cambios</button>
                    </form>
                {/* )} */}
            </div>
        </div>
    )
}

export default StudentProfile