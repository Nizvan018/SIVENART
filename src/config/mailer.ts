import nodemailer = require('nodemailer');

export let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'sivenart.notifications@gmail.com', // generated ethereal user
      pass: 'xfngiadrvpgudlqi', // generated ethereal password
    },
  });

  transporter.verify().then(()=>{
    console.log('Ready for send emails');
  });