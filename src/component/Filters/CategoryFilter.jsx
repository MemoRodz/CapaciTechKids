import { useSelector, useDispatch } from 'react-redux'
import { selectCategory, filterCourses } from '../../redux/slices/coursesSlice'
import { getAllCategories } from '../../redux/slices/categoriesSlice'
import { useEffect, useState } from 'react';

function CategoryFilter() {
    const [selections, setSelections] = useState([]) // local state de las checkboxes
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategories('http://localhost:3001/categories/'))
    }, [])

    useEffect(() => {
        dispatch(selectCategory(selections))
        dispatch(filterCourses())
    }, [selections])

    const handleChange = (event) => {
        const { value, checked } = event.target
        if (checked) {
            setSelections(((prevValues) => [...prevValues, value]))
        } else {
            setSelections(((prevValues) =>
                prevValues.filter((checkedValue) => checkedValue !== value)))
        }
    };

    const categories = useSelector((state) => {
        return ["all", ...new Set(state.categories.categories.map((item) => item.Name))];
    });

    return (
        <>
            <h2>Categories</h2>
            {categories.map((category) => (
                <div>
                    <label htmlFor="">{category}</label>
                    <input type="checkbox"
                        value={category}
                        onChange={handleChange} />
                </div>
            ))}
        </>
    );
}

export default CategoryFilter