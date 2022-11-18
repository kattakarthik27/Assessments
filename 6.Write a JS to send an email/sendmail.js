var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'karthik@gmail.com',
    pass: '1234'
  }
});

var mailOptions = {
  from: 'katta.karthikmudhiraj@gmail.com',
  to: 'katta.karthikmudhiraj512@gmail.com',
  subject: 'Sending Email using Node.js', html: '<h1>Welcome</h1><p>That was easy!</p>',
//   text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});