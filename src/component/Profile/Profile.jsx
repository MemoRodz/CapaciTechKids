import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from '../Profile/Profile.module.css'
import { useSelector } from "react-redux";

export const Profile = () => {
    const user = useSelector(state => state.user) 
    const { isAuthenticated, isLoading } = useAuth0();
    console.log(user)   

    if (isLoading) {
        return <div>Loading...</div>;
    }

    console.log('Imagen de usuario: ', user.picture);
    return (
        isAuthenticated && (
            <div className={styles.user}>
                <div className={styles.imgUser} ><img src={user.Image ? user.Image : "Image not found"} alt={user.Name} /></div>
                <h2>{user.Name ? user.Name : "Name?"}</h2>
            </div>
        )
    )
};