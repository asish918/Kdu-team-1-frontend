import { ResourcesConfig } from "aws-amplify";

export const authConfig: ResourcesConfig['Auth'] = {
    Cognito: {
        userPoolId: `${process.env.USER_POOL_ID}`,
        userPoolClientId: `${process.env.USER_POOL_CLIENT_ID}`
    }
};