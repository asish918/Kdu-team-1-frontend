import { Amplify } from 'aws-amplify';

Amplify.configure({
    Auth: {
        Cognito: {
            //  Amazon Cognito User Pool ID
            userPoolId: `${process.env.USER_POOL_ID}`,
            // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
            userPoolClientId: `${process.env.USER_POOL_CLIENT_ID}`,
            // OPTIONAL - Set to true to use your identity pool's unauthenticated role when user is not logged in
            allowGuestAccess: true
        }
    }
});

export const authConfig = Amplify.getConfig();