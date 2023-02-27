import React from 'react';
import { useAuth0, User } from '@auth0/auth0-react';
import styles from './Login.module.css'

export const LoginButton = () => {
    const { loginWithRedirect, user, isLoading, isAuthenticated } = useAuth0();

    const handleClick = () => {
        loginWithRedirect()
    }

    return <button onClick={handleClick}>
        Ingresa Gratis
    </button>
};