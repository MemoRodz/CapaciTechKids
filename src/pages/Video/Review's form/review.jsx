import React from "react";
import swal from 'sweetalert'
import { useSelector } from "react-redux";
import axios from "axios";
import { baseUrl } from "../../../models/baseUrl";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"


const ReviewForm = ({ id, setIsSend }) => {
  const userInfo = useSelector((state) => state.user);
  console.log(id)
  const userDataInitialState = {
    Score: 0,
    Comment: "",
    PK_Course: id,
    PK_User: userInfo.ID,
  }
  const [userData, setUserData] = React.useState(userDataInitialState);

  function handleChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post(`${baseUrl}/reviews`, userData)
    swal({
      title: "Review enviada",
      text: "Gracias por tu comentario",
      icon: "success",
      buttons: "Cerrar"
    })
    setIsSend(true)
    setUserData(userDataInitialState)
  }


  function handleStar(index) {
    const newScore = userData.Score === index + 1 ? 0 : index + 1
    setUserData({
      ...userData,
      Score: newScore
    })

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Estrellitas:</label>
        <div>
          {Array(5)
            .fill()
            .map((v, i) => 1 + i)
            .map((item, index) => (
              <button style={{ background: 'transparent' }}
                key={`dificulty-button-${index}`}
                name="Score"
                type="button"
                onClick={() => handleStar(index)
                }>
                {userData.Score > index ? <BsStarFill size="2rem" color="#f2b705" /> : <BsStar size="2rem" color="#f2b705" />}

              </button>
            ))}
        </div>
        <br></br>
        <label>Comentarios: </label>
        <textarea
          autoComplete="false"
          name="Comment"
          cols="50"
          rows="10"
          placeholder="Escribe tus comentarios sobre el curso..."
          required
          value={userData.Comment}
          onChange={handleChange}></textarea>
        <br></br>
        <button type="submit">Enviar Reseña</button>
      </form>
    </div>
  );
};

export default ReviewForm;
