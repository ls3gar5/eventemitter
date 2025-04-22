// Event Consumer
import nodemailer from 'nodemailer';
import eventEmitter from './eventEmitter.js';
// Create a transporter object using SMTP
eventEmitter.on('userRegistered', async ({username, email}) => {
    console.log(`Preparing email to ${username}...`);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'lsegars@gmail.com',
            pass: 'Ci@r0sari0G+'
        }
    });
    // Setup email data
    const mailOptions = {
        from: 'no-replay@gmail.com',
        to: email,
        subject: 'Welcome to our service',
        text: `Hello ${username}, welcome to our service!`
    };
    // Send email
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
});
