import { superValidate, message, fail, } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
// import { schemaStep1, schemaStep2, schemaStep3 } from './schemas.js';
import nodemailer from 'nodemailer';
import { SMTPHOST, SMTPPORT, SMTPUSER, SMTPPASSWORD } from '$env/static/private';

import type { Actions, PageServerLoad } from './$types.js';

import { fullSchema } from './schema.js';

// Strongly typed status message
// type Message = { step: number; text?: string };

// const steps = [zod4(schemaStep1), zod4(schemaStep2), zod4(schemaStep3)] as const;
// const lastStep = steps[2];




// .superRefine((data, ctx) => {
//   /* validate only the fields that belong to the current step */
//   if (data.step >= 1 && !data.fullName) ctx.addIssue({ code: 'custom', path: ['fullName'], message: 'Required' });
//   if (data.step >= 2 && !data.companyName) ctx.addIssue({ code: 'custom', path: ['companyName'], message: 'Required' });
//   if (data.step >= 3 && !data.gpu) ctx.addIssue({ code: 'custom', path: ['gpu'], message: 'Required' });
// })

export const load: PageServerLoad = async () => {
  const form = await superValidate(zod4(fullSchema));
  return { form };
};

import { setFlash } from 'sveltekit-flash-message/server';

export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const formData = await request.formData();
    // const currentStep = Number(formData.get('step') ?? 1);

    // Validate only the current step
    const form = await superValidate(formData, zod4(fullSchema));


    if (!form.valid) {
     setFlash({ type: 'error', message: "Please check your form data." }, cookies);

      return message(form, 'Please correct the errors below.');
    }

    // If not on the final step, increment and return
    // if (currentStep < 3) {
    //   form.data.step = currentStep + 1;
	//   console.log("Proceeding to step:", form.data.step);
    //   return message(form, { step: form.data.step });
    // }

    // Final step: send email
    const { fullName, email, phone, companyName, gpu, pricing, hours, notes } = form.data;

    const emailData = { fullName, email, phone, companyName, gpu, pricing, hours, notes };

    try {
      await sendEmails(emailData);
      setFlash({ type: 'success', message: 'Your request has been submitted.' }, cookies);
      return { form };
    } catch (err) {
		console.error("Error sending emails:", err);
      setFlash({ type: 'error', message: String(err) }, cookies);
      return fail(400, { form });

	}
  },
};

const transporter = nodemailer.createTransport({
	host: SMTPHOST,
	port: SMTPPORT,
	secure: SMTPPORT === "465" ? true: false, // true for 465, false for others
	auth: {
		user: SMTPUSER,
		pass: SMTPPASSWORD
	}
});

async function sendEmails(data: {
	fullName: string;
	email: string;
	phone: string;
	companyName: string;
	gpu: string;
	pricing: string;
	notes: string;
	hours: number | undefined;
}) {
	const { fullName, email, phone, companyName, gpu, pricing, notes, hours } = data;

	const currentYear = new Date().getFullYear();

	// ✅ Email sent to the user
	const htmlContent = `
	<div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto;">
		<div style="text-align: center; margin-bottom: 20px; padding-top: 45px;">
			<img src="https://syaala.com/images/server.webp" alt="Syaala Logo" style="width: 150px; height: auto;" />
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
		<div style="text-align: center; margin-bottom: 20px; padding-top: 45px;">
			<img src="https://syaala.com/images/server.webp" alt="Syaala Logo" style="width: 150px; height: auto;" />
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
		<p style="text-align: center;">&copy; ${currentYear} <a href="https://syaala.com" style="color: #10B981; text-decoration: none;">Syaala</a> — All Rights Reserved.</p>
	</div>
	`;

	// Send confirmation email to the user
	await transporter.sendMail({
		from: `"Syaala" <${SMTPUSER}>`,
		to: email,
		subject: "Thank you for contacting Syaala!",
		html: htmlContent
	});

	// Send notification email to the admin
	await transporter.sendMail({
		from: `"Syaala Form" <${SMTPUSER}>`,
		to: SMTPUSER, // Admin email
		subject: "New AI Deployment Request Received",
		html: adminHtml
	});
}
