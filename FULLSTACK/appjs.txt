const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname, 'public')));

// Create nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'vidya2882tan@gmail.com',
        pass: 'yuaq pudy yxzj yvsc'
    }
});

// Route to send email
app.get('/send-email', (req, res) => {
    const { recipientEmail, subject, body } = req.query;

    const mailOptions = {
        from: 'vidya2882tan@gmail.com',
        to: recipientEmail,
        subject: subject,
        html: body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('Error: Unable to send email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
