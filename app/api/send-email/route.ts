import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
    try {
        const { name, email, message } = await request.json();

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json({ message: 'Toate câmpurile sunt obligatorii.' }, { status: 400 });
        }

        // Create a transporter using environment variables
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST, // e.g., 'smtp.gmail.com'
            port: parseInt(process.env.EMAIL_PORT || '587'),
            secure: process.env.EMAIL_PORT === '465', // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER, // e.g., 'alex.mosora@gmail.com'
                pass: process.env.EMAIL_PASS, // App password or email password
            },
        });

        // Email options
        const mailOptions = {
            from: `"${name}" <${email}>`, // Sender name and email
            to: 'adelinpricop12@gmail.com', // Recipient email
            subject: `Mesaj nou de la ${name} prin formularul de contact`,
            text: `
Nume: ${name}
Email: ${email}
Mesaj: ${message}
            `,
            html: `
<p><strong>Nume:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Mesaj:</strong> ${message}</p>
            `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email trimis cu succes!' }, { status: 200 });
    } catch (error) {
        console.error('Eroare la trimiterea emailului:', error);
        return NextResponse.json({ message: 'Eroare la trimiterea emailului.' }, { status: 500 });
    }
}