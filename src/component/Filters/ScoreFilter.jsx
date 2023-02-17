import { useSelector, useDispatch } from 'react-redux'
import { setMinScore, filterCourses } from '../../redux/slices/coursesSlice'

function ScoreFilter() {
    const minScore = useSelector((state) => state.courses.minScore);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(setMinScore(event.target.value));
        dispatch(filterCourses());
    };

    return (
        <form>
            <label htmlFor="score-input">Minimum score:</label>
            <input
                id="score-input"
                type="number"
                value={minScore}
                onChange={handleChange}
            />
        </form>
    );
}

export default ScoreFilter