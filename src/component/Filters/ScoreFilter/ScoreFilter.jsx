import { useSelector, useDispatch } from 'react-redux'
import { setMinScore, filterCourses } from '../../../redux/slices/coursesSlice'
import styles from './ScoreFilter.module.css'

function ScoreFilter() {
    const minScore = useSelector((state) => state.courses.minScore);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(setMinScore(event.target.value));
        dispatch(filterCourses());
    };

    return (
        <form style={styles.scorefilter}>
            <label htmlFor="score-input">Score:</label>
            <input
                id="score-input"
                type="range"
                value={minScore}
                onChange={handleChange}
                max={10}
                min={1}
            />
        </form>
    );
}

export default ScoreFilter