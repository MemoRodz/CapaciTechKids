import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from './Create.module.css'


export function validate(formData) {
  let errors = {}


  if (formData.Title.length === 0) {errors.Title = "Add a title"}
  if (formData.Description.length <= 0 ) {errors.Description="add a Description"};
  if (formData.Duration <= 0) {errors.Duration="add a duration for video"};
 // if ( typeof formData.Duration !== "number") {errors.Duration = "must be a number"}


  return errors;
}


const Create = () => {
  const navigate = useNavigate()
  const [cats,setCats] = useState([])
  const [validacion, setValidacion] = useState("")
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [formData, setFormData] = useState({
    Title: "",
    Description: "",
    Professor: "",
    Duration: "11111",
    Category: [],
    Active: true
  });
  const [errors,setErrors] = React.useState ({
    Title: "Add a Title",
    Description: "Add a Description",
    Professor: "",
    Duration: "",
    Category: [],
    Active: true
  });
  console.log("Errors duracion", errors.Duration)

  const [data,setData] = useState([])
  useEffect(() => {
    const funciona = async() => {
   const {data} = await axios.get(`http://localhost:3001/users/instructors`)
   const cats = await axios.get(`http://localhost:3001/categories`)
    setCats(cats.data)
    setData(data)}
   funciona()
  }, [])
  console.log("CATS",cats)

  const handleSubmit = async (event) => {
    event.preventDefault();

    for (const [key, value] of Object.entries(errors)) {
      if (value.length !== 0) setValidacion(value)
    }
    try {
      const response = await axios.post(
        "http://localhost:3001/courses/createCourse",
        formData
      );
      navigate('/course')
    } catch (error) {
      console.log(error);
    }
  };

  function handleInputChange(e) {
    const { name, value, type, checked } = e.target;

    setErrors(validate({...formData,
      [name]: value})) 
  
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

  
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      Category: selectedCategories,
    }));
  }, [selectedCategories]);

  console.log(formData);

  return (
    <div>
      <div className={styles.heard}>
        <img src="..\img\Rectangle 77big.png" alt="{course.Title}" />
      </div>
      <div className={styles.container}>
      <h2>Create a New Course</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <div className={styles.labcont}>
          <div className={styles.lab}>
          Title:
          <input
            type="text"
            name="Title"
            minLength="5"
            maxLength="100"
            placeholder="Insert Title"
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
        <br />
        <label>
          <div className={styles.labcont}>
          <div className={styles.lab}>
          Description:
          <textarea name="Description" minlength="5" maxlength="200" placeholder="Insert Description"
            value={formData.Description}
            onChange={handleInputChange}
            required>
          </textarea>
          </div>
          <div className={styles.errs}>
          {/* {errors.Description ? <div>{errors.Description}</div> : null} */}
          </div>            
          </div>
        </label>
        <br />
        <label htmlFor="Professor">Instructor's name:</label>
        <select
          name="Professor"
          value={formData.PK_User}
          onChange={handleInputChange}
        >
          <option value="">-- Select an option --</option>
          {data.map((data) => (
            <option key={data.PK_User} value={data.PK_User}>
              {data.Name}
            </option>
          ))}
        </select>
        <br />
        <label>Categories:</label>
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
          Duration:
          <input
            type="text"
            name="Duration"
            value={formData.Duration}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <br />
        {validacion ? <div>{validacion}</div> : null}
        <button type="submit">Create Course</button>
      </form>
      </div>
    </div>
  );
};

export default Create;

// import {useState,useEffect} from 'react'
// import style from '../Create/Create.module.css'
// import axios from 'axios';

// const Create = () => {
//     const [formData, setFormData] = useState({
//       Title: "",
//       Description: "",
//       Category: "",
//       //   "Development",
//       //   "Design",
//       //   "Marketing",
//       //   "Business",
//       //   "Music",
//       //   "Language",
//       // ],
//       Start_date: "",
//       End_date: "",
//       PK_User:100,
//       Image: "",
//       Duration: "",
//       //Active: true,
//       Score: "",
//     });
  
//     const handleInputChange = (event) => {
//       const { name, value } = event.target;
//       setFormData({ ...formData, [name]: value });
//     };
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       const regexString = /^.{5,150}$/;
//       const regexInteger = /^\d+$/;
//       const regexDate = /^\d{4}-\d{2}-\d{2}$|^\d{2}-\d{2}-\d{4}$/;
//       const regexScore = /^[1-5]$/;
//       if (
//         regexString.test(formData.Title) &&
//         regexString.test(formData.Description) &&
//         regexString.test(formData.Category) &&
//         regexDate.test(formData.Start_date) &&
//         regexDate.test(formData.End_date) &&
//         regexString.test(formData.Image) &&
//         regexInteger.test(formData.Duration) &&
//         regexScore.test(formData.Score)
//       ) {
//         alert("Form data is valid!");
//         console.log(formData);
//         axios.post(`http://localhost:3001/courses/createPost`,{...formData})  //,category:selectedCategories
//         .then(res=>console.log(res.data))
//         .catch(error=>console.log(error))
//       } else {
//         alert("Form data is invalid!");
//         console.log({...formData})
//       }
//     };

//     // CATEGORIAS
//         const categories = [
//           "Development",
//           "Design",
//           "Marketing",
//           "Business",
//           "Music",
//           "Language",
//         ];
//       const [selectedCategories, setSelectedCategories] = useState([]);
    
//       function handleCategoryChange(event) {
//         const category = event.target.value;
//         const isChecked = event.target.checked;
    
//         if (isChecked) {
//           setSelectedCategories([...selectedCategories, category]);
//         } else {
//           setSelectedCategories(
//             selectedCategories.filter((c) => c !== category)
//           );
//         }
//       }
    
  
//     return (
//       <div className={style.container}>  
//           <h1>Here you can add courses</h1>  
//           <form className={style.form} onSubmit={handleSubmit}>
//             <label htmlFor="title">Title:</label>
//             <input
//               type="text"
//               name="title"
//               minLength={5}
//               maxLength={150}
//               value={formData.Title}
//               onChange={handleInputChange}              
//             />
      
//             <label htmlFor="description">Description:</label>
//             <input
//               type="text"
//               name="description"
//               value={formData.Description}
//               onChange={handleInputChange}
//             />
      
//            {/* <label htmlFor="category">Category:</label>
//             <div className={style["category-selector"]}>
//               <h2>Categories</h2>
//               <input
//                       type="checkbox"
//                       value={Category}                  
//                       onChange={handleCategoryChange}
//                     />
//                {categories.map((category) => (
//                 <div key={category}>
//                   <label>
//                     <input
//                       type="checkbox"
//                       value={category}
//                       checked={selectedCategories.includes(category)}
//                       onChange={handleCategoryChange}
//                     />
//                     {category}
//                   </label>
//                 </div>
//               ))} 
//               <p>Selected categories: {selectedCategories.join(", ")}</p>
//             </div>*/}
      
//             <label htmlFor="start_date">Start Date:</label>
//             <input
//               type="date"
//               name="start_date"
//               value={formData.Start_date}
//               onChange={handleInputChange}
//             />
      
//             <label htmlFor="end_date">End Date:</label>
//             <input
//               type="date"
//               name="end_date"
//               value={formData.End_date}
//               onChange={handleInputChange}
//             />
      
//             <label htmlFor="image">Image:</label>
//             <input
//               type="url"
              
//               name="image"
//               value={formData.Image}
//               onChange={handleInputChange}
//             />
      
//             <label htmlFor="duration">Duration:</label>
//             <input
//               type="number"
//               min={7200}
//               max={604800}
//               name="duration"
//               value={formData.Duration}
//               onChange={handleInputChange}
//             />
      
//             <label htmlFor="score">Score:</label>
//             <input
//               type="number"
//               max={5}
//               name="score"
//               value={formData.Score}
//               onChange={handleInputChange}
//             />
      
//             <button className={style.button} type="submit">Submit</button>
//           </form>
//       </div>
//     );
//   };
  
// export default Create;
