const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
require('dotenv').config();

const serviceAccount = require('./serviceAccountKey');

// TODO: update if ever released
const host = 'https://brave-hypatia-40862b.netlify.app';

const db = admin.firestore();

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount.FIREBASE_KEY),
    databaseURL: 'https://vp-comments.firebaseio.com.firebaseio.com'
});

exports.handler = async (event, context, callback) => {
    await db.collection('comments').add({
        name: 'Test'
    });

    return callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            data: `Test data added successfully`
        })
    })
};

//
// const { SMTP_USER, SMTP_PASSWORD, SENDER_EMAIL, ADMIN_EMAIL, RECEIVER_EMAIL } = process.env;
// const RECEIVER_LIST = [ADMIN_EMAIL, RECEIVER_EMAIL];
//
// exports.sendEmailNotification = functions.firestore
//   .document('comments/{docId}')
//   .onCreate((snap, context) => {
//     const record = snap.data();
//     const emailPlainText = `${record.name} wrote: ${record.content}`;
//     const articleUrl = `${host}${record.slug}`;
//
//     const emailHtmlText = `<span style='font-weight:bold'>${record.name}</span> wrote: <div style="margin-top:8px; background-color:#f8f8f8; padding: 8px;">${record.content}</div><div style="margin-top:8px;">Article: <a href="${articleUrl}">${articleUrl}</a></div>`;
//
//     const authData = nodemailer.createTransport({
//         host: "in-v3.mailjet.com",
//         port: 587,
//         auth: {
//             user: SMTP_USER,
//             pass: SMTP_PASSWORD
//         }
//     });
//
//     return authData
//       .sendMail({
//         from: SENDER_EMAIL,
//         to: ADMIN_EMAIL, // TODO: change to RECEIVER_LIST if live
//         subject: '😺 New comment',
//         text: emailPlainText,
//         html: emailHtmlText,
//       })
//       .then(() => console.log(`Email sent to ${receiveremail} successfully`))
//       .catch((error) => console.log(`---ERROR: ${error}`));
//   });
