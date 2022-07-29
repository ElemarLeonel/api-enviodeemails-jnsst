const mailer = require("nodemailer");
require('dotenv').config();

const emailEnvio = process.env.USER_EMAIL_SMTP;
const senhaEnvio = process.env.USER_PASS_SMTP;

module.exports = (fullname, email, title, message) =>{
    const smtp = mailer.createTransport({
        host: "smtp.office365.com",
        name: "JN",
        port: 587,
        secure: false,
        auth:{
            user: emailEnvio,
            pass: senhaEnvio
        }
    })
    const mail = {
        from: emailEnvio,
        sender: email,
        to: "jn.e-social@hotmail.com",
        subject: `Email enviado por ${fullname} - ${title}`,
        text: message
    }

    return new Promise((resolve, reject) => {
        smtp.sendMail(mail)
            .then(response =>{
                smtp.close();
                return resolve(response);
            })
            .catch(error =>{
                smtp.close();
                return reject(error);
            })
    })
}