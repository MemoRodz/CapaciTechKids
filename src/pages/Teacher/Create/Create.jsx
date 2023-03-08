import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./Create.module.css";
import { baseUrl } from "../../../models/baseUrl";
import SubiendoImagenes from "../../../component/Upload/Upload";
import swal from "sweetalert";
import { useSelector } from "react-redux";

export function validate(formData) {
  let errors = {};

  if (formData.Title.length === 0) {
    errors.Title = "Agrega un titulo";
  }
  if (formData.Description.length <= 0) {
    errors.Description = "Agrega una descripcion";
  }
  if (formData.Duration <= 1) {
    errors.Duration = "Agrega una duracion del video";
  }
  // if ( typeof formData.Duration !== "number") {errors.Duration = "must be a number"}
  return errors;
}

const Create = () => {
  const userInfo = useSelector(state => state.user)

  const formDataInitialState = {
    Title: "",
    Description: "",
    Professor: userInfo.ID,
    Duration: 30,
    Category: [],
    Active: true,
    Image: "",
    Videos: []
  };
  const navigate = useNavigate();
  const [cats, setCats] = useState([]);
  const [validacion, setValidacion] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [formData, setFormData] = useState(formDataInitialState);

  const [videos,setVideos] = useState({
    video : "",
    titulo : "",
    descripcion : ""
  })
  const [errors, setErrors] = React.useState({
    Title: "Agrega un titulo",
    Description: "Agrega una descripcion",
    Professor: userInfo.ID,
    Duration: "",
    Category: [],
    Active: true,
    Image: "",
    Videos: []
  });
 
  const [data, setData] = useState([]);
  useEffect(() => {
    const funciona = async () => {
      const { data } = await axios.get(`${baseUrl}/users/instructors`);
      const cats = await axios.get(`${baseUrl}/categories`);
      setCats(cats.data);
      setData(data);
    };
    funciona();
  }, []);
  console.log("CATS", cats);

  const handleSubmit = async (event) => {
    event.preventDefault();

    for (const [key, value] of Object.entries(errors)) {
      if (value.length !== 0) setValidacion(value);
    }
    try {
      const response = await axios.post(
        `${baseUrl}/courses/createCourse`,
        formData
      );
      setFormData(formDataInitialState);
      swal({
        title: "Cursos ha sido Creado",
        icon: "success",
        button: "Cerrar",
      });
      navigate("/course");
    } catch (error) {
      console.log(error);
    }
  };

  function handleInputChange(e) {
    const { name, value, type, checked } = e.target;

    setErrors(
      validate({
        ...formData,
        [name]: value,
      })
    );

    

    if (type === "checkbox") {
      setSelectedCategories((prevCategories) =>
        checked
          ? [...prevCategories, name]
          : prevCategories.filter((category) => category !== name)
      );
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }

  const handleVideo = (e) => {
    const {name,value} = e.target
    setVideos({...videos, [name]: value 
    });
  }

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      Category: selectedCategories,
    }));
  }, [selectedCategories]);

  console.log(formData);

  function cambiarImagen(img) {
    setFormData({...formData, Image : img})
}

const handleAddVideo = (e) => {
  e.preventDefault()
  console.log("entre a handle")
  setFormData(prevFormData => ({
    ...prevFormData,
    Videos: [...prevFormData.Videos, videos]
  }))
  setVideos({
    video : "",
    titulo : "",
    descripcion : ""
  }) 
};

  return (
    <>
      {/* <div className={styles.heard}>
        <img src="..\img\Rectangle 77big.png" alt="{course.Title}" />
      </div> */}
        <h2>Crear Nuevo Curso</h2>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <label>
            <div className={styles.labcont}>
              <div className={styles.lab}>
                Titulo:
                <input
                  type="text"
                  name="Title"
                  minLength="5"
                  maxLength="100"
                  placeholder="Insertar Título"
                  required
                  value={formData.Title}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.errs}>
                {/* {errors.Title ? <div>{errors.Title}</div> : null} */}
              </div>
            </div>
          </label>
          <div>
          <SubiendoImagenes cambiarImagen={cambiarImagen} />
          </div>
          <br />
          <label>
            <div className={styles.labcont}>
              <div className={styles.lab}>
                Descripción:
                <textarea
                  name="Description"
                  minlength="5"
                  maxlength="500"
                  placeholder="Insertar Descripción"
                  value={formData.Description}
                  onChange={handleInputChange}
                  rows="10"
                  cols="65"
                  required></textarea>                  
              </div>              
              <div className={styles.errs}>
                {/* {errors.Description ? <div>{errors.Description}</div> : null} */}
              </div>
            </div>
          </label>
          <br />
          <label>Categorias: </label>
          <div className={styles.cate}>
            {cats.map((category) => (
              <label key={category.PK_Category}>
                <input
                  type="checkbox"
                  name={category.Name}
                  checked={selectedCategories.includes(category.Name)}
                  onChange={handleInputChange}
                  
                />
                {category.Name}
              </label>
            ))}
          </div>
          <br />
          <label>
            Duración:
            <input
              type="number"
              name="Duration"
              value={formData.Duration}
              onChange={handleInputChange}
              min={30}
              max={150}
              required
            />
          </label>
          <label>Videos: (puedes agregar varios videos)</label>
          <label>
  Nombre del video:
  <input
    type="text"
    name="titulo"
    style={{width: "500px"}}
    value={videos.titulo}
    onChange={handleVideo}
  />
</label>

<label>
  Descripción del video:
  <textarea
    name="descripcion"
    value={videos.descripcion}
    onChange={handleVideo}
    cols="60"
    rows="10"
  />
</label>

<label>
  URL del video:
  <input
    type="url"
    pattern="https://.*"
    name="video"
    style={{width: "500px"}}
    value={videos.video}
    onChange={handleVideo}
  />
</label>


<button type="button" onClick={(e)=>handleAddVideo(e)} > 
  Agregar video
</button> 
          <br />
          {validacion ? <div>{validacion}</div> : null}
          <button type="submit" disabled={Object.keys(validate).length}>Crear Curso</button>
        </form>
      </div>
    </>
  );
};

export default Create;
