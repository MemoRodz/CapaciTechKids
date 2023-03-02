import { useSelector } from 'react-redux'
import styles from './TeacherProfile.module.css'

function TeacherProfile() {
    const userInfo = useSelector(state => state.user)

    return (
        <>
            <div className={styles.instructor_profile}>
                <img src={userInfo.Image ? userInfo.Image : "Image Not Found"} alt="profile-image" height={200} width={200} />
                <h2>{userInfo.Name ? userInfo.Name : "Name?"}</h2>
            </div>
        </>
    )
}

export default TeacherProfile