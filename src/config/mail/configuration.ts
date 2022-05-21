import { registerAs } from '@nestjs/config';

export default registerAs('nodemailer', () => ({
    host: process.env.EMAIL_HOST,
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    noreply: process.env.EMAIL_NOREPLY,
    secure: process.env.EMAIL_SECURE,
    port: process.env.EMAIL_PORT
}));