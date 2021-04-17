const nodemailer = require('nodemailer');

const { SMTP_USER, SMTP_PASSWORD, SENDER_EMAIL, ADMIN_EMAIL, RECEIVER_EMAIL } = process.env;
const RECEIVER_LIST = [ADMIN_EMAIL, RECEIVER_EMAIL];

// TODO: update if ever released
const host = 'https://brave-hypatia-40862b.netlify.app';

module.exports = app => {
    app.post('/api/report-comment', (req, res) => {
        const { comment, name, pathname } = req.body;
        const emailPlainText = `${name} wrote: ${comment}`;
        const articleUrl = `${host}${pathname}`;

        const emailHtmlText = `<span style='font-weight:bold'>${name}</span> wrote: <div style="margin-top:8px; background-color:#f8f8f8; padding: 8px;">${comment}</div><div style="margin-top:8px;">Article: <a href="${articleUrl}">${articleUrl}</a></div>`;

        try {
            const authData = nodemailer.createTransport({
                host: "in-v3.mailjet.com",
                port: 587,
                auth: {
                    user: SMTP_USER,
                    pass: SMTP_PASSWORD
                }
            });

            return authData
                .sendMail({
                    from: SENDER_EMAIL,
                    to: ADMIN_EMAIL, // TODO: change to RECEIVER_LIST if live
                    subject: '😺 New comment',
                    text: emailPlainText,
                    html: emailHtmlText,
                })
                .then(() => {
                    console.log(`Email sent to ${ADMIN_EMAIL} successfully`); // TODO: change to RECEIVER_LIST if live
                    res.sendStatus(200);
                })
                .catch((error) => {
                    res.sendStatus(500);
                    console.log(`---ERROR: ${error}`);
                });
        } catch (e) {
            res.status(418).send(e);
        }
    });
};
