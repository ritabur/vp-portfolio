const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const serviceAccount = require('./serviceAccountKey');

// TODO: update
const host = 'https://brave-hypatia-40862b.netlify.app';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount.FIREBASE_KEY),
    databaseURL: 'https://vp-comments.firebaseio.com.firebaseio.com'
});

const { senderemail, senderpass, receiveremail } = functions.config().mailer;

exports.sendEmailNotification = functions.firestore
  .document('comments/{docId}')
  .onCreate((snap, context) => {
    const record = snap.data();
    const emailPlainText = `${record.name} wrote: ${record.content}`;
    const articleUrl = `${host}${record.slug}`;

    const emailHtmlText = `<span style='font-weight:bold'>${record.name}</span> wrote: <div style="margin-top:8px; background-color:#f8f8f8; padding: 8px;">${record.content}</div><div style="margin-top:8px;">Article: <a href="${articleUrl}">${articleUrl}</a></div>`;

    const authData = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: senderemail,
        pass: senderpass,
      },
    });

    return authData
      .sendMail({
        from: 'comments@kimchi.com',
        to: receiveremail,
        subject: '😺 New comment',
        text: emailPlainText,
        html: emailHtmlText,
      })
      .then(() => console.log(`Email sent to ${receiveremail} successfully`))
      .catch((error) => console.log(`---ERROR: ${error}`));
  });
