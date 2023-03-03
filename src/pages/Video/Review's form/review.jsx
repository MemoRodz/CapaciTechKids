import React from "react";
import {useSelector} from 'react-redux'
import axios from "axios"
import {baseUrl} from '../../../models/baseUrl'



const ReviewForm = (id) => {
    const userInfo = useSelector(state => state.user) 
    console.log(userInfo) 
    const [userData, setUserData] = React.useState({ 
        Score : 0,
        Comment  : "",
        PK_Course : id.id,
        PK_User : userInfo.ID
    });

  function handleChange(e) {

    setUserData({...userData,
      [e.target.name]: e.target.value})

  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post(`${baseUrl}/reviews`, userData)
 }


    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Estrellitas:</label>
             <input   
                name="Score" 
                type="Number"
                value={userData.Score} 
                onChange={handleChange}></input>

                <br></br>
            <label>Comentarios: </label>
             <input   
                name="Comment" 
                placeholder="Escribe tus comentarios sobre el curso..." 
                type="textarea" 
                value={userData.Comment} 
                onChange={handleChange}></input>
                <br></br>
              <button type="submit">Enviar reseña</button>
              </form>
        
    </div>
    )
}

export default ReviewForm;