
exports.handler = (event) => {
  console.log(event)
  
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
      logContent: JSON.stringify(event.Records)
    };
    
    console.log("replacements",replacements)
    
    var htmlToSend = template(replacements);

    var mailOptions = {
      from: 'luucambotdub@gmail.com',
      to: 'lcbo@tma.com.vn',
      subject: 'Destination dynamo table mail log message',
      html: htmlToSend
    };
    transporter.sendMail(mailOptions, function (error) {

      if (error) {
        console.log(error);
      }
    });
  })
}
  


 
