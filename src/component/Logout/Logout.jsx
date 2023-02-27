import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from './Logout.module.css'

export const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
        <div className={styles.btnlogout}>
        <button onClick={() => logout({ returnTo: window.location.origin })}>
            Salir
        </button>
        </div>
    );
};