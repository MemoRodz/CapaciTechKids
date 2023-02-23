import React from 'react';
import { useAuth0, User } from '@auth0/auth0-react';
import styles from './Login.module.css'

export const LoginButton = () => {
    const { loginWithRedirect, user } = useAuth0();
    console.log(user);
    return <button onClick={() => loginWithRedirect()}>
        Ingresa Gratis
    </button>
};