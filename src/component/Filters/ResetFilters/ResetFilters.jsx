import { useDispatch } from 'react-redux'
import {resetFilters} from '../../../redux/slices/coursesSlice'
import styles from './ResetFilters.module.css'

function ResetFilters() {
    const dispatch = useDispatch()

    const handleReset = () => {
        console.log('RESET');
        dispatch(resetFilters())
    }

    return (
        <>
            <button type='button' onClick={handleReset}
            className={styles.resetbtn}>Reset</button>
        </>
    )
}

export default ResetFilters