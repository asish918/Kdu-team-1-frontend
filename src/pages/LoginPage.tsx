import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Hub } from 'aws-amplify/utils';
import { useNavigate } from 'react-router-dom';
import ReactGA from "react-ga";

export default function LoginPage() {
    const navigate = useNavigate();

    Hub.listen('auth', ({ payload }) => {
        switch (payload.event) {
            case 'signedIn':
                // Track login event
                ReactGA.event({
                    category: 'User',
                    action: 'Logged In',
                    label: 'AWS Amplify Sign In'
                  });
                console.log('user have been signedIn successfully.');
                navigate(-1);
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
