import * as ejsLibrary from "../libraries/ejs.library";
import { transporter} from "../config/mailer";

export async function sendUserCredentials(params: { data: object | undefined; email: string | undefined }) {
  const { data, email } = params;
  const htmlContent = await ejsLibrary.renderFileHtml({ data:data || {}, file: "registerUser-template.ejs"});
  const responseMailer = await transporter.sendMail({
    from: process.env.MAILER_USER,
    to: email,
    html: htmlContent,
    subject:"Nuevo registro SIVENART"
  });
}