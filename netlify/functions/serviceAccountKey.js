const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    FIREBASE_KEY: {
        type: "service_account",
        project_id: "vp-comments",
        private_key_id: process.env.SAK_PRIVATE_KEY_ID,
        private_key: process.env.SAK_PRIVATE_KEY.replace(/\\n/g, '\n'),
        client_email: process.env.SAK_CLIENT_EMAIL,
        client_id: process.env.SAK_CLIENT_ID,
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: process.env.SAK_X509_CERT_URL,
    },
};
