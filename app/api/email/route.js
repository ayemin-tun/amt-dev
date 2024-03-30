import { mailOptions, transporter } from '@/utils/nodemailer';
import { NextResponse } from 'next/server';
export async function POST(req) {
    if (req.method === "POST") {
        const data = await req.json();
        if (!data.name || !data.email || !data.message) {
            return NextResponse.json({ error: 'Bad Request' }, { status: 400 })
        }

        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: `Portfolio Contact Email from ${data.email}`,
                html: `<div style="border:1px solid black; padding:15px;border-color:gray;border-radius:10px;">
                            <h2>Contact Email</h2><hr>
                            <p>Name: ${data.name}</p>
                            <p>Email: <a href="mailto:${data.email}">${data.email}</a></p>
                            <h4>Message:</h4>
                            <p>${data.message}</p>
                        </div>`
            });
            return NextResponse.json({ success: true }, { status: 200 })
        } catch (error) {
            console.log(error)
            return NextResponse.json({ error: error.message }, { status: 400 })
        }

    }
    // Log the parsed data
    console.log(data.name);
    return NextResponse.json('Hello from server');

}