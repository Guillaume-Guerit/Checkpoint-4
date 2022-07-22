const nodemailer = require("nodemailer");
require("dotenv").config();

class sendMailer {
  static sendMail = async (req, res) => {
    const { Email, Message, FirstName, LastName } = req.body[0];

    const transporter = await nodemailer.createTransport({
      host: process.env.SMTP_SENDIN,
      port: process.env.SMTP_PORT_SENDIN,
      secure: false,
      auth: {
        user: process.env.SMTP_SENDIN_USER,
        pass: process.env.SMTP_SENDIN_PASSWORD,
      },
    });

    const mailOptions = {
      from: `${Email}`,
      to: `guillaumeguerit@gmail.com`, // this is the address to which the email will be sent
      subject: `Mail from ${FirstName} ${LastName} come from our website`,
      text: `${Message} \n\n  Email: ${Email}`,
      html: `<p>${Message}</p><p>Email: ${Email}</p>`,
    };

    return transporter
      .sendMail(mailOptions)
      .then((info) => {
        res.status(200).send(info);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };
}

module.exports = sendMailer;
