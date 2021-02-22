
exports.handler = (event) => {
  var nodemailer = require('nodemailer');
  var smtpTransport = require('nodemailer-smtp-transport');
  var handlebars = require('handlebars');
  var fs = require('fs');

  var readHTMLFile = function (path, callback) {
    fs.readFile(path, { encoding: 'utf-8' }, function (err, html) {
      if (err) {
        callback(err);
      }
      else {
        callback(null, html);
      }
    });
  };


  var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
      user: "luucambotdub@gmail.com",
      pass: "@@@Dddd123"
    }
  }));

  readHTMLFile('template.html', function (err, html) {
    if(err)
    {
      console.log(err);
      return;
    }
    var template = handlebars.compile(html);
    var replacements = {
      newId: "John Doe"
    };
    var htmlToSend = template(replacements);

    var mailOptions = {
      from: 'luucambotdub@gmail.com',
      to: 'lcbo@tma.com.vn',
      subject: 'Test subject',
      html: htmlToSend
    };
    transporter.sendMail(mailOptions, function (error) {

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
  })
}
  


 
