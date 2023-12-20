import nodemailer from 'nodemailer'

const user = process.env.GOOGLE_USER_EMAIL
const pass = process.env.GOOGLE_USER_PASS

export const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user,
        pass,
    }
})