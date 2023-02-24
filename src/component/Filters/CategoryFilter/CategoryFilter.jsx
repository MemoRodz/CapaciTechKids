import { useSelector, useDispatch } from 'react-redux'
import { selectCategory, filterCourses } from '../../../redux/slices/coursesSlice'
import { useState } from 'react';
import styles from './CategoryFilter.module.css'

function CategoryFilter() {
    //const [isToggle, setIsToggle] = useState(false)
    const dispatch = useDispatch();

    const selectedCategories = useSelector((state) => state.courses.selectedCategory)

    const handleAddCategory = (name) => {
        dispatch(selectCategory(selectedCategories.concat([name])))
        dispatch(filterCourses())
    }

    const handleRemoveCategories = (name) => {
        dispatch(selectCategory(selectedCategories.filter(category => category !== name)))
        dispatch(filterCourses())
    }

    const categories = useSelector((state) => {
        return [...new Set(state.categories.categories.map((item) => item.Name))];
    });

    return (
        <>
            <div className={styles.selectedcategories}>
                {selectedCategories.length > 0 && selectedCategories.map((category) => (
                    <>
                        <button type='button' onClick={() => handleRemoveCategories(category)}>
                            {category} X
                        </button>
                    </>
                ))}
            </div>
            <h2 className={styles.categoriestitle}>Categorias</h2>
            <div className={styles.categoryoptions}>
                {categories && categories.map((category) => (
                    <>
                        <button type='button' onClick={() => handleAddCategory(category)}
                        disabled={selectedCategories.includes(category)}>
                            {category}
                        </button>
                    </>
                ))}
            </div>
        </>
    );
}

export default CategoryFilter