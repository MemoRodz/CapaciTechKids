import { useSelector, useDispatch } from 'react-redux'
import { selectCategory, filterCourses } from '../../redux/slices/coursesSlice'
import {getAllCategories} from '../../redux/slices/categoriesSlice'
import { useEffect } from 'react';

function CategoryFilter() {
    const dispatch = useDispatch();
    const categories = useSelector((state) => {
        console.log(state)
        return ["all", ...new Set(state.categories.categories.map((item) => item.Name))];
    });

    useEffect(()=>{
        dispatch(getAllCategories('http://localhost:3001/categories/'))
    },[])

    const selectedCategory = useSelector((state) => state.courses.selectedCategory);

    const handleChange = (event) => {
        dispatch(selectCategory(event.target.value));
        dispatch(filterCourses());
    };
    
    return (
        <form>
            <h2>Categories</h2>
            <label htmlFor="category-select">Select a category:</label>
            <select id="category-select" value={selectedCategory} onChange={handleChange}>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </form>
    );
}

export default CategoryFilter