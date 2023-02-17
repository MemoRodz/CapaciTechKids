import { useSelector, useDispatch } from 'react-redux'
import { selectCategory, filterCourses } from '../../redux/slices/coursesSlice'

function CategoryFilter() {

    const categories = useSelector((state) => {
        console.log(state)
        return ["all", ...new Set(state.categories.categories.map((item) => item.Name))];
    });

    const selectedCategory = useSelector((state) => state.courses.selectedCategory);
  
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(selectCategory(event.target.value));
        dispatch(filterCourses());
    };
    
    return (
        <form>
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