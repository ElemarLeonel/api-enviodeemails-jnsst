const mailer = require("nodemailer");

module.exports = (fullname, email, title, message) =>{
    const smtp = mailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false,
        auth:{
            user: process.env.USER_EMAIL_SMTP,
            pass: process.env.USER_PASS_SMTP
        }
    })
    const mail = {
        from: email,
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