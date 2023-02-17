import {useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import style from '../Create/Create.module.css'
import {getAllInstructors} from '../../redux/slices/instructors.slice'

const Create = () => {
    getAllInstructors('http://localhost:3001/courses/createPost')
    const [formData, setFormData] = useState({
      title: "",
      description: "",
      //category: "",
      start_date: "",
      end_date: "",
      image: "",
      duration: "",
      score: "",
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const regexString = /^.{5,150}$/;
      const regexInteger = /^\d+$/;
      const regexDate = /^\d{4}-\d{2}-\d{2}$|^\d{2}-\d{2}-\d{4}$/;
      const regexScore = /^[1-5]$/;
      if (
        regexString.test(formData.title) &&
        regexString.test(formData.description) &&
        regexString.test(formData.category) &&
        regexDate.test(formData.start_date) &&
        regexDate.test(formData.end_date) &&
        regexString.test(formData.image) &&
        regexInteger.test(formData.duration) &&
        regexScore.test(formData.score)
      ) {
        alert("Form data is valid!");
        console.log(formData);
      } else {
        alert("Form data is invalid!");
        console.log({...formData,category: selectedCategories})
      }
    };

    // INSTRUCTORES
    const intructors = useSelector((state) => state.intructors.intructors)

    // CATEGORIAS
        const categories = [
          "Development",
          "Design",
          "Marketing",
          "Business",
          "Music",
          "Language",
        ];
      const [selectedCategories, setSelectedCategories] = useState([]);
    
      function handleCategoryChange(event) {
        const category = event.target.value;
        const isChecked = event.target.checked;
    
        if (isChecked) {
          setSelectedCategories([...selectedCategories, category]);
        } else {
          setSelectedCategories(
            selectedCategories.filter((c) => c !== category)
          );
        }
      }
    
  
    return (
      <div className={style.container}>  
          <h1>Here you can add courses</h1>  
          <form className={style.form} onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              minLength={5}
              maxLength={150}
              value={formData.title}
              onChange={handleInputChange}              
            />
      
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
      
            <label htmlFor="category">Category:</label>
            <div className={style["category-selector"]}>
              <h2>Categories</h2>
              {categories.map((category) => (
                <div key={category}>
                  <label>
                    <input
                      type="checkbox"
                      value={category}
                      checked={selectedCategories.includes(category)}
                      onChange={handleCategoryChange}
                    />
                    {category}
                  </label>
                </div>
              ))}
              <p>Selected categories: {selectedCategories.join(", ")}</p>
            </div>
      
            <label htmlFor="start_date">Start Date:</label>
            <input
              type="date"
              name="start_date"
              value={formData.start_date}
              onChange={handleInputChange}
            />
      
            <label htmlFor="end_date">End Date:</label>
            <input
              type="date"
              name="end_date"
              value={formData.end_date}
              onChange={handleInputChange}
            />
      
            <label htmlFor="image">Image:</label>
            <input
              type="url"
              pattern='http://./*'
              name="image"
              value={formData.image}
              onChange={handleInputChange}
            />
      
            <label htmlFor="duration">Duration:</label>
            <input
              type="number"
              min={7200}
              max={604800}
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
            />
      
            <label htmlFor="score">Score:</label>
            <input
              type="number"
              max={5}
              name="score"
              value={formData.score}
              onChange={handleInputChange}
            />
      
            <button className={style.button} type="submit">Submit</button>
          </form>
      </div>
    );
  };
  
export default Create;
