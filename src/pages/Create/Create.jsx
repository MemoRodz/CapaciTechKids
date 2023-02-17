import React, { useState } from "react";
import axios from "axios";

const Create = () => {
  const [formData, setFormData] = useState({
    Title: "",
    Description: "",
    Start_Date: "",
    End_Date: "",
    PK_User: "",
    Category: "",
    Image: "",
    Duration: "",
    Active: "",
    Score: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/courses/createPost",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>Create a New Course</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="Title"
            value={formData.Title}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="Description"
            value={formData.Description}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Start Date:
          <input
            type="date"
            name="Start_Date"
            value={formData.Start_Date}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          End Date:
          <input
            type="date"
            name="End_Date"
            value={formData.End_Date}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          PK User:
          <input
            type="number"
            name="PK_User"
            value={formData.PK_User}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Category:
          <input
            type="text"
            name="Category"
            value={formData.Category}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Image:
          <input
            type="text"
            name="Image"
            value={formData.Image}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Duration:
          <input
            type="number"
            name="Duration"
            value={formData.Duration}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Active:
          <input
            type="checkbox"
            name="Active"
            checked={formData.Active}
            onChange={(e) =>
              setFormData({ ...formData, Active: e.target.checked })
            }
          />
        </label>
        <br />
        <label>
          Score:
          <input
            type="number"
            name="Score"
            value={formData.Score}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Create Course</button>
      </form>
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
