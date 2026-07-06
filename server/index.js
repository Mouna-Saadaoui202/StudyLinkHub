const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const SMTP_HOST = process.env.SMTP_HOST || 'pro3.mail.ovh.net';
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_SECURE = process.env.SMTP_SECURE === 'true';
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const CONTACT_TO = process.env.CONTACT_TO || SMTP_USER;
const XSUSTAIN_SMTP_USER = process.env.XSUSTAIN_SMTP_USER;
const XSUSTAIN_SMTP_PASS = process.env.XSUSTAIN_SMTP_PASS;
const XSUSTAIN_CONTACT_TO = process.env.XSUSTAIN_CONTACT_TO || XSUSTAIN_SMTP_USER;

if (!SMTP_USER || !SMTP_PASS) {
    console.warn('Missing SMTP_USER or SMTP_PASS. Email sending will fail until they are configured.');
}

// Setup Nodemailer transporter.
let transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASS
    }
});


let transporter2 = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: {
        user: XSUSTAIN_SMTP_USER,
        pass: XSUSTAIN_SMTP_PASS
    }
});


app.post('/api/send-email', async (req, res) => {
    const { name, number, email } = req.body;

    // Email options
    let mailOptions = {
        from: SMTP_USER,
        to: CONTACT_TO,
        subject: 'New client submit', // Subject line
        text: `Name: ${name}\nNumber: ${number}\nEmail: ${email}`, // plaintext body
        html: `<h2>New contact just signed in !! </h2><br/><p>Name: ${name}</p><p>Number: ${number}</p><p>Email: ${email}</p>` // html body
    };

    // Send email
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Failed to send email', error);
        res.status(500).send('Failed to send email');
    }
});

app.post('/api-xsustain-main/handle-email', async (req, res) => {
    const { name,
        email,
        phone,
        subject,
        message } = req.body;

    // Email options
    let mailOptions = {
        from: XSUSTAIN_SMTP_USER,
        to: XSUSTAIN_CONTACT_TO,
        subject: 'New client submit', // Subject line
        text: `Name: ${name}\nNumber: ${phone}\nEmail: ${email}`, // plaintext body
        html: `<p>${subject}</p></br>
        <h2>New contact just signed in !! </h2><br/>
        <p>Name: ${name}</p><p>Number: ${phone}</p>
        <p>Email: ${message  }</p>` // html body
    };

    // Send email
    try {
        await transporter2.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Failed to send email', error);
        res.status(500).send('Failed to send email');
    }
});

const PORT = process.env.PORT || 3010;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
