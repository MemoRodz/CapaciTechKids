import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from './Logout.module.css'

export const LogoutButton = () => {
    const { logout } = useAuth0();

    const handleClick = () => {
        logout({ returnTo: window.location.origin })
        console.log('sali!');
        window.localStorage.clear()
    }

    return (
        <div className={styles.btnlogout}>
          <button onClick={handleClick}>
            Salir
          </button>
        </div>
    );
};