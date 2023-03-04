import { useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './StudentProfile.module.css'
import SubiendoImagenes from '../../../component/Upload/Upload'
import {baseUrl} from '../../../models/baseUrl'
import axios from 'axios'

function StudentProfile() {
    const userInfo = useSelector(state => state.user)
 
    const [showForm, setShowForm] = useState(false);
    const [userData, setUserData] = useState({ 
        Name : "",
        Image : "",
        PK_User : userInfo.ID,
    });

    function cambiarImagen(img) {
        
        setUserData({...userData, Image : img})
        
    }
    console.log("Ahoraaaaaaaaaaaaaaaaaa",userData)

    function handleChange(e) {
        setUserData({...userData, [e.target.name]: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.put(`${baseUrl}/users/putusers`, userData);
    }

    const handleButtonClick = () => {
        setShowForm(true);
    }
    return (
        <div>
            {/* <div className={styles.student_profile}>
                <img src={userInfo.Image ? userInfo.Image : "Image Not Found"} alt="profile-image" height={200} width={200} />
                <h2>{userInfo.Name ? userInfo.Name : "Name?"}</h2>   DESCOMENTAR, COMENTADO POR CUESTION DE ESTILOS. 
               
            </div> */}
            <button onClick={handleButtonClick}>Edit Profile</button>
            <div>
            {showForm && (
                <form onSubmit={handleSubmit}>
                <label>Agrega tu nuevo nombre:</label>
                 <input   
                    name="Name" 
                    type="text"
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
            )}
            </div>
            </div>
        
    )
}

export default StudentProfile