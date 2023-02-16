import { useSelector, useDispatch } from 'react-redux'
import { selectCategory, filterCourses } from '../../redux/slices/courses.silce'

function CategoryFilter() {
    const categories = useSelector((state) => {
        return ["all", ...new Set(state.courses.courses.map((item) => item.category))];
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