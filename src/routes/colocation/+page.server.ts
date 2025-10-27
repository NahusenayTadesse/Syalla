import { superValidate, message, } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
// import { schemaStep1, schemaStep2, schemaStep3 } from './schemas.js';
import nodemailer from 'nodemailer';
import { HOST, PORT, USER, PASSWORD } from '$env/static/private';

import type { Actions, PageServerLoad } from './$types.js';

// Strongly typed status message
// type Message = { step: number; text?: string };

// const steps = [zod4(schemaStep1), zod4(schemaStep2), zod4(schemaStep3)] as const;
// const lastStep = steps[2];



import { z } from 'zod';

 const fullSchema = z.object({
  step: z.number().int().min(1).max(3),
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string(),
  companyName: z.string(),
  gpu: z.string(),
  pricing: z.string(),
  hours: z.string(),
  notes: z.string()
}).superRefine((data, ctx) => {
  /* validate only the fields that belong to the current step */
  if (data.step >= 1 && !data.fullName) ctx.addIssue({ code: 'custom', path: ['fullName'], message: 'Required' });
  if (data.step >= 2 && !data.companyName) ctx.addIssue({ code: 'custom', path: ['companyName'], message: 'Required' });
  if (data.step >= 3 && !data.gpu) ctx.addIssue({ code: 'custom', path: ['gpu'], message: 'Required' });
});

export const load: PageServerLoad = async () => {
  const form = await superValidate(zod4(fullSchema));
  return { form };
};

export const actions: Actions = {
    main: async ({ request }) => {
        const formData = await request.formData();
        const form = await superValidate(formData, zod4(fullSchema));

        if (!form.valid) return message(form, { step: form.data.step });

        // not finished yet → go to next step
        if (form.data.step < 3) {
            form.data.step += 1;
            return message(form, { step: form.data.step });
        }

        // ---------- last step ----------
    try {
				await sendEmails(form.data);
				console.log("Success")
				return { success: true, message: 'Test emails sent with dummy data.' };
			} catch (err) {
				console.log(err)
				return { success: false, error: String(err) };
			}
    },	
};


const transporter = nodemailer.createTransport({
	host: HOST,
	port: PORT,
	secure: PORT === "465" ? true: false, // true for 465, false for others
	auth: {
		user: USER,
		pass: PASSWORD
	}
});

async function sendEmails(data: {
	fullName: string;
	email: string;
	phone: string
	companyName: string;
	gpu: string;
	pricing: string;
	notes: string;
	hours: string;
}) {
	const { fullName, email, phone, companyName, gpu, pricing, notes, hours } = data;

	const currentYear = new Date().getFullYear();

	// ✅ Email sent to the user
	const htmlContent = `
	<div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto;">
		<div style="background-color: #10B981; height: 100px; text-align: center; margin-bottom: 20px; padding-top: 45px;">
			<img src="https://syaala.com/images/gpu.png" alt="Syaala Logo" style="width: 150px; height: auto;" />
		</div>
		<h2 style="color: #10B981;">Thank You for Getting in Touch!</h2>
		<p>Hi ${fullName.split(" ")[0]},</p>
		<p>Thank you for reaching out to <a href="https://syaala.com" style="color:#10B981; text-decoration: none;">Syaala</a>. 
		We’ve received your request and our team is reviewing your deployment details.</p>
		<p>We’ll get back to you shortly to help you deploy and host your AI model — without the hustle.</p>
		<br>
		<p>Best regards,<br><strong style="color: #10B981;">The Syaala Team</strong></p>
		<p style="text-align: center;">&copy; ${currentYear} <a href="https://syaala.com" style="color: #10B981; text-decoration: none;">Syaala</a> — All Rights Reserved.</p>
	</div>
	`;

	// ✅ Email sent to the admin
	const adminHtml = `
	<div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto;">
		<div style="background-color: #10B981; height: 100px; text-align: center; margin-bottom: 20px; padding-top: 45px;">
			<img src="https://syaala.com/images/gpu.png" alt="Syaala Logo" style="width: 150px; height: auto;" />
		</div>
		<h2 style="color: #10B981;"> New Deployment Request Received</h2>

		<p><strong style="color: #10B981;">Full Name:</strong> ${fullName}</p>
		<p><strong style="color: #10B981;">Email:</strong> ${email}</p>
		${phone ? `<p><strong style="color: #10B981;">Phone:</strong> ${phone}</p>` : ''}
		${companyName ? `<p><strong style="color: #10B981;">Company:</strong> ${companyName}</p>` : ''}
		${gpu ? `<p><strong style="color: #10B981;">GPU Preference:</strong> ${gpu}</p>` : ''}
		${pricing ? `<p><strong style="color: #10B981;">Selected Plan:</strong> ${pricing}</p>` : ''}
		${hours ? `<p><strong style="color: #10B981;">Usage Hours:</strong> ${hours}</p>` : ''}
		${notes ? `<p><strong style="color: #10B981;">Notes:</strong></p><p>${notes}</p>` : ''}

		<br>
		<p style="text-align: center;">&copy; ${currentYear} <a href="https://syaala.com" style="color: #0EA5E9; text-decoration: none;">Syaala</a> — All Rights Reserved.</p>
	</div>
	`;

	// Send confirmation email to the user
	await transporter.sendMail({
		from: `"Syaala" <${USER}>`,
		to: email,
		subject: "Thank you for contacting Syaala!",
		html: htmlContent
	});

	// Send notification email to the admin
	await transporter.sendMail({
		from: `"Syaala Form" <${USER}>`,
		to: "nahusenaytadesse75@gmail.com",
		subject: "New AI Deployment Request Received",
		html: adminHtml
	});
}
