import { useDispatch } from 'react-redux'
import { sortByScore } from '../../../redux/slices/coursesSlice'
import styles from './SortByScore.module.css'

function SortByScore() {
    const dispatch = useDispatch()

    const sortMax = () => {
        dispatch(sortByScore('maxMin'))
    }

    const sortMin = () => {
        dispatch(sortByScore('minMax'))
    }

    return (
        <>
            <div className={styles.sortbtns}>
                <h2>Ordenar por Puntaje</h2>
                <button type='button' onClick={sortMax}>Máximo</button>
                <button type='button' onClick={sortMin}>Mínimo</button>
            </div>
        </>
    )
}

export default SortByScore