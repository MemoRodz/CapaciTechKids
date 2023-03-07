import { useState } from "react"

function LoginWithPopup() {
    const [error, setError] = useState(null);

    const handleSignInWithPopup = () => {
        const lock = new Auth0Lock(
            'your_client_id',
            'your_domain.auth0.com'
        );

        lock.show({
            authParams: {
                scope: 'openid email profile',
                audience: 'https://your_api_identifier.com'
            },
            connections: ['google-oauth2'],
        }, (err, profile, token) => {
            if (err) {
                setError(err.message);
            } else {
                // User signed in successfully.
                console.log(profile);
                console.log(token);
            }
        });
    };

    const handleSignInWithGoogle = () => {
        handleSignInWithPopup();
    };

    return (
        <div>
            <button onClick={handleSignInWithGoogle}>Sign In with Google</button>
            {error && <p>{error}</p>}
        </div>
    )
}

export default LoginWithPopup