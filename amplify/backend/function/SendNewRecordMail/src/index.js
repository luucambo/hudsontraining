
exports.handler = (event) => {
  var nodemailer = require('nodemailer');
  var smtpTransport = require('nodemailer-smtp-transport');

  var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
      user: "luucambotdub@gmail.com",
      pass: "@@@Dddd123"
    }
  }));

  var text = 'Email body goes here';

  var mailOptions = {
    from: 'luucambotdub@gmail.com',
    to: 'lcbo@tma.com.vn',
    subject: 'Test subject',
    text: text
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      const response = {
        statusCode: 500,
        body: JSON.stringify({
          error: error.message,
        }),
      };
    }
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: `Email processed succesfully!`
      }),
    };
  });
};
