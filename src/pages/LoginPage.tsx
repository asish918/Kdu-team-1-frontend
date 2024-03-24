import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Hub } from 'aws-amplify/utils';
import { useNavigate } from 'react-router-dom';


export default function LoginPage() {
    const navigate = useNavigate();

    Hub.listen('auth', ({ payload }) => {
        switch (payload.event) {
            case 'signedIn':
                console.log('user have been signedIn successfully.');
                navigate("/");
                break;
            case 'signedOut':
                console.log('user have been signedOut successfully.');
                break;
            case 'tokenRefresh':
                console.log('auth tokens have been refreshed.');
                break;
            case 'tokenRefresh_failure':
                console.log('failure while refreshing auth tokens.');
                break;
            case 'signInWithRedirect':
                console.log('signInWithRedirect API has successfully been resolved.');
                break;
            case 'signInWithRedirect_failure':
                console.log('failure while trying to resolve signInWithRedirect API.');
                break;
        }
    });

    return (
        <Authenticator>
            {({ signOut, user }) =>
                <>
                    <p>{user?.username}</p>
                    <button onClick={signOut}>Sign Out</button>
                </>
            }
        </Authenticator>
    );
}
