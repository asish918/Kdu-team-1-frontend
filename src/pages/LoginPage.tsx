import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function LoginPage() {
    return (
        <Authenticator signUpAttributes={["email"]}>
            {({ signOut, user }) =>
                <>
                    <p>{user?.username}</p>
                    <button onClick={signOut}>Sign Out</button>
                </>
            }
        </Authenticator>
    );
}
