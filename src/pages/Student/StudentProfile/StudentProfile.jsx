import { useSelector } from 'react-redux'
import styles from './StudentProfile.module.css'

function StudentProfile() {
    const userInfo = useSelector(state => state.user)

    return (
        <>
            <div className={styles.student_profile}>
                <img src={userInfo.Image ? userInfo.Image : "Image Not Found"} alt="profile-image" height={200} width={200} />
                <h2>{userInfo.Name ? userInfo.Name : "Name?"}</h2>
            </div>
        </>
    )
}

export default StudentProfile