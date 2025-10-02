// app/api/contact/route.ts
import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

type RequestBody = {
	name: string
	email: string
	message: string
}

export async function POST(req: Request) {
	try {
		const body: RequestBody = await req.json()

		if (!body?.email || !body?.message || !body?.name) {
			return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
		}

		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: parseInt(process.env.SMTP_PORT || '587', 10),
			secure: process.env.SMTP_SECURE === 'true',
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
		})

		const mailOptions = {
			from: `${body.name} <${process.env.SMTP_USER}>`,
			to: process.env.MY_EMAIL,
			replyTo: body.email,
			subject: `Portfolio contact from ${body.name}`,
			text: `You have a new message from your portfolio contact form.\n\nName: ${body.name}\nEmail: ${body.email}\n\nMessage:\n${body.message}`,
			html: `<p>You have a new message from your portfolio contact form.</p>
             <p><strong>Name:</strong> ${body.name}<br/>
             <strong>Email:</strong> ${body.email}</p>
             <p><strong>Message:</strong><br/>${body.message.replace(
								/\n/g,
								'<br/>'
							)}</p>`,
		}

		await transporter.sendMail(mailOptions)

		if (process.env.TELEGRAM_BOT_API && process.env.TELEGRAM_CHAT_ID) {
			const telegramUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_API}/sendMessage`
			const telegramText = `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`

			await fetch(telegramUrl, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					chat_id: process.env.TELEGRAM_CHAT_ID,
					text: telegramText,
				}),
			})
		}

		return NextResponse.json({ success: true }, { status: 200 })
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (err: any) {
		console.error('contact route error:', err)
		return NextResponse.json(
			{ error: err?.message || 'Server error' },
			{ status: 500 }
		)
	}
}
