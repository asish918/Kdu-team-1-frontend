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
        }
    });

    return (
        <Authenticator signUpAttributes={["name"]}>
            {({ signOut, user }) =>
                <>
                    <p>{user?.username}</p>
                    <button onClick={signOut}>Sign Out</button>
                </>
            }
        </Authenticator>
    );
}
