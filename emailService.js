// Event Consumer
import nodemailer from 'nodemailer';
import eventEmitter from './eventEmitter.js';
// Create a transporter object using SMTP
// listen to this event => userRegistered
eventEmitter.on('userRegistered', async ({username, email}) => {
    console.log(`Preparing email to ${username}...`);

    const sendEmail = async () => {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'lsegars@gmail.com',
                pass: 'lgbk uawr kmzz gkszA'
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
            setTimeout(sendEmail, 3000);
        }
    }

    await sendEmail();
});
