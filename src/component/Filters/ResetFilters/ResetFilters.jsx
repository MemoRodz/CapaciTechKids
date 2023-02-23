import { useDispatch } from 'react-redux'
import {resetFilters} from '../../../redux/slices/coursesSlice'
import styles from './ResetFilters.module.css'

function ResetFilters() {
    const dispatch = useDispatch()

    const handleReset = () => {
        dispatch(resetFilters())
    }

    return (
        <>
            <button type='button' onClick={handleReset}
            className={styles.resetbtn}>Remover filtros</button>
        </>
    )
}

export default ResetFilters