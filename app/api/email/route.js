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
                subject: "New Email Send from Contact",
                html: `<h4>Contact Email</h4><p>Name: ${data.name}<br/>Email: <a href="mailto:${data.email}">${data.email}</a><br/><p>${data.message}</p></p>`
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