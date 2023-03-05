import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from '../Profile/Profile.module.css'
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const Profile = () => {
    const user = useSelector(state => state.user) 
    const { isAuthenticated, isLoading } = useAuth0();
    console.log(user)   

    useEffect(() => {
        console.log("El estado de user ha cambiado", user);
        
    }, [user.Name]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        isAuthenticated && (
            <div className={styles.user}>
                <div className={styles.imgUser} ><img src={user.Image ? user.Image : "Image not found"} alt={user.Name} /></div>
                <h2>{user.Name ? user.Name : "Name?"}</h2>
            </div>
        )
    )
};