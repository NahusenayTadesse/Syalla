import './utils-_bsNeCKS.js';
import './client2-DzPV4lId.js';
import { s as superValidate, z as zod, o as object, m as message, U as USER, a as string, n as number, P as PASSWORD, b as PORT, H as HOST } from './schemas-BNPRgEqo.js';
import './app-DuJI3prF.js';
import nodemailer from 'nodemailer';
import './context-Daw8ILuF.js';
import './index-server-CHpaVqRR.js';
import './errors-B8liwVcD.js';

const fullSchema = object({
  step: number().int().min(1).max(3),
  fullName: string().min(2),
  email: string().email(),
  phone: string(),
  companyName: string(),
  gpu: string(),
  pricing: string(),
  hours: string(),
  notes: string()
}).superRefine((data, ctx) => {
  if (data.step >= 1 && !data.fullName) ctx.addIssue({ code: "custom", path: ["fullName"], message: "Required" });
  if (data.step >= 2 && !data.companyName) ctx.addIssue({ code: "custom", path: ["companyName"], message: "Required" });
  if (data.step >= 3 && !data.gpu) ctx.addIssue({ code: "custom", path: ["gpu"], message: "Required" });
});
const load = async () => {
  const form = await superValidate(zod(fullSchema));
  return { form };
};
const actions = {
  main: async ({ request }) => {
    const formData = await request.formData();
    const form = await superValidate(formData, zod(fullSchema));
    if (!form.valid) return message(form, { step: form.data.step });
    if (form.data.step < 3) {
      form.data.step += 1;
      return message(form, { step: form.data.step });
    }
    await sendEmails(form.data);
    form.data = fullSchema.parse({});
    return message(form, { text: "Form posted successfully!", step: 1 });
  },
  test: async () => {
    const dummy = {
      fullName: "Jane Test",
      email: "nahusenaytadesse75@gmail.com",
      phone: "+10000000000",
      companyName: "TestCo",
      gpu: "NVIDIA RTX 3090",
      pricing: "enterprise",
      notes: "This is a dummy test submission.",
      hours: "40"
    };
    try {
      await sendEmails(dummy);
      console.log("Success");
      return { success: true, message: "Test emails sent with dummy data." };
    } catch (err) {
      console.log(err);
      return { success: false, error: String(err) };
    }
  }
};
const transporter = nodemailer.createTransport({
  host: HOST,
  port: PORT,
  secure: true,
  // true for 465, false for others
  auth: {
    user: USER,
    pass: PASSWORD
  }
});
async function sendEmails(data) {
  const { fullName, email, phone, companyName, gpu, pricing, notes, hours } = data;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const htmlContent = `
	<div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto;">
		<div style="background-color: #0F172A; height: 100px; text-align: center; margin-bottom: 20px; padding-top: 45px;">
			<img src="https://syaala.com/logo.svg" alt="Syaala Logo" style="width: 150px; height: auto;" />
		</div>
		<h2 style="color: #0EA5E9;">Thank You for Getting in Touch!</h2>
		<p>Hi ${fullName.split(" ")[0]},</p>
		<p>Thank you for reaching out to <a href="https://syaala.com" style="color: #0EA5E9; text-decoration: none;">Syaala</a>. 
		We’ve received your request and our team is reviewing your deployment details.</p>
		<p>We’ll get back to you shortly to help you deploy and host your AI model — without the hustle.</p>
		<br>
		<p>Best regards,<br><strong style="color: #0EA5E9;">The Syaala Team</strong></p>
		<p style="text-align: center;">&copy; ${currentYear} <a href="https://syaala.com" style="color: #0EA5E9; text-decoration: none;">Syaala</a> — All Rights Reserved.</p>
	</div>
	`;
  const adminHtml = `
	<div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto;">
		<div style="background-color: #0F172A; height: 100px; text-align: center; margin-bottom: 20px; padding-top: 45px;">
			<img src="https://syaala.com/logo.svg" alt="Syaala Logo" style="width: 150px; height: auto;" />
		</div>
		<h2 style="color: #0EA5E9;">🚀 New Deployment Request Received</h2>

		<p><strong style="color: #0EA5E9;">Full Name:</strong> ${fullName}</p>
		<p><strong style="color: #0EA5E9;">Email:</strong> ${email}</p>
		${phone ? `<p><strong style="color: #0EA5E9;">Phone:</strong> ${phone}</p>` : ""}
		${companyName ? `<p><strong style="color: #0EA5E9;">Company:</strong> ${companyName}</p>` : ""}
		${gpu ? `<p><strong style="color: #0EA5E9;">GPU Preference:</strong> ${gpu}</p>` : ""}
		${pricing ? `<p><strong style="color: #0EA5E9;">Selected Plan:</strong> ${pricing}</p>` : ""}
		${hours ? `<p><strong style="color: #0EA5E9;">Usage Hours:</strong> ${hours}</p>` : ""}
		${notes ? `<p><strong style="color: #0EA5E9;">Notes:</strong></p><p>${notes}</p>` : ""}

		<br>
		<p style="text-align: center;">&copy; ${currentYear} <a href="https://syaala.com" style="color: #0EA5E9; text-decoration: none;">Syaala</a> — All Rights Reserved.</p>
	</div>
	`;
  await transporter.sendMail({
    from: `"Syaala" <${USER}>`,
    to: email,
    subject: "Thank you for contacting Syaala!",
    html: htmlContent
  });
  await transporter.sendMail({
    from: `"Syaala Form" <${USER}>`,
    to: "nahusenaytadesse75@gmail.com",
    subject: "🧠 New AI Deployment Request Received",
    html: adminHtml
  });
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CnjFiTGv.js')).default;
const server_id = "src/routes/test/+page.server.ts";
const imports = ["_app/immutable/nodes/5.Iu6oO-13.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CLwWOwFo.js","_app/immutable/chunks/BFKXpH0O.js","_app/immutable/chunks/CxMODamZ.js","_app/immutable/chunks/BlVKUAU_.js","_app/immutable/chunks/CJygYTv7.js","_app/immutable/chunks/CKtct6T_.js","_app/immutable/chunks/CDRNG5VO.js","_app/immutable/chunks/D4TPtVWH.js","_app/immutable/chunks/DUC9tY10.js","_app/immutable/chunks/CCy0LVOi.js","_app/immutable/chunks/IBy8_Y1-.js","_app/immutable/chunks/Bn0XSnGU.js","_app/immutable/chunks/DkGyCA0o.js"];
const stylesheets = ["_app/immutable/assets/ComboBox.CV-KWLNP.css","_app/immutable/assets/5.COHB_AP_.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=5-BeRFJKnJ.js.map
