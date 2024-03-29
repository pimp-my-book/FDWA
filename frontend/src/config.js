const dev = {
    apiGateway: {
        REGION: process.env.REACT_APP_REGION,
        URL: process.env.REACT_APP_ENDPNT_DEV
    },
    cognito: {
        REGION: process.env.REACT_APP_REGION,
        USER_POOL_ID: process.env.REACT_APP_USRPL_ID_DEV,
        APP_CLIENT_ID: process.env.REACT_APP_USRPL_CLNTID_DEV,
        IDENTITY_POOL_ID: process.env.REACT_APP_IDPL_ID_DEV
    }
};

const prod = {
    apiGateway: {
        REGION: process.env.REACT_APP_REGION,
        URL: process.env.REACT_APP_ENDPNT_PROD
    },
    cognito: {
        REGION: process.env.REACT_APP_REGION,
        USER_POOL_ID: process.env.REACT_APP_USRPL_ID_PROD,
        APP_CLIENT_ID: process.env.REACT_APP_USRPL_CLNTID_PROD,
        IDENTITY_POOL_ID: process.env.REACT_APP_IDPL_ID_PROD
    }
};

const config = process.env.REACT_APP_STAGE === "prod"
    ? prod
    : dev;

export default {
    ...config
};