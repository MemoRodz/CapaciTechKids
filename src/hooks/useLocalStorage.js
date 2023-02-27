import { useAuth0 } from '@auth0/auth0-react'
import { useState, useEffect } from 'react'

// key = item value name in localstorage
export function useLocalStorage() {
    const { isAuthenticated, user, isLoading } = useAuth0();
    const [storedUser, setStoredUser] = useState()

    // Save user object to local storage
    if (isAuthenticated && user) {
        localStorage.setItem("user", JSON.stringify(user));
    }

    // Retrieve user object from local storage on initial render
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (!isLoading && storedUser) {
            setStoredUser(JSON.parse(storedUser));
        }
    }, [isLoading]);

    return { storedUser }
}