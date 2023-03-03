import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from '../Profile/Profile.module.css'

export const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    console.log('Imagen de usuario: ', user.picture);
    return (
        isAuthenticated && (
            <div className={styles.user}>
                <div className={styles.imgUser} ><img src={user.picture ? user.picture : "Image not found"} alt={user.name} /></div>
                <h2>{user.name ? user.name : "Name?"}</h2>
            </div>
        )
    )
};