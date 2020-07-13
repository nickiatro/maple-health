var nodemailer = require('nodemailer');
exports.sendEmail = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;

  var testAccount = await nodemailer.createTestAccount();

  var transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  var info = await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: 'info@sante-erable-mtl_maple-health-mtl.ca',
    subject: subject,
    text: message,
  });

  console.log(`Test Email sent: ${info.messageId}`);
  console.log(`Test Email URL: ${nodemailer.getTestMessageUrl(info)}`);
};
