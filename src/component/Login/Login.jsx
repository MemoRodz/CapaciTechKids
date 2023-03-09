import React, { useState } from 'react';
import { useAuth0, User } from '@auth0/auth0-react';
import styles from './Login.module.css'
import {audience} from '../../main'

export const LoginButton = () => {
    const [error, setError] = useState(null);
    const { loginWithPopup } = useAuth0()


    const handleSignInWithPopup = async () => {
        //loginwithpopup agarra el domain y el client_id del auth0Provider, no hace falta pasarlos en el objeto
        try {
            await loginWithPopup({
                prompt: 'select_account',
                connection: 'google-oauth2',
                audience: audience,
                scope: 'openid email profile',
            });
        } catch (error) {
            setError(error.message);
        }
    };

    const handleSignInWithGoogle = () => {
        handleSignInWithPopup();
    };
    
    return(        
    <div className={styles.btnloging}>
        <button onClick={handleSignInWithGoogle}>
            Ingresa Gratis
        </button>
    </div>
    )
};