/* Outgoing emails! */
app.post('/email', (req, res) => {
  
  const output = `
      <h3>Contact Details</h3>
      <p><b>First Name:</b> ${req.body.first_name}</p>
      <p><b>Last Name:</b> ${req.body.last_name}</p>
      <p><b>Email:</b> ${req.body.email}</p>
      <h3>Message</h3>
      <p>${req.body.text_area}</p>
    `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
          user: process.env.EMAIL || '', // TODO: your gmail account
          pass: process.env.EMAILPASSWORD || '' // TODO: your gmail password
      }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        replyTo: req.body.email, // sender address
        inReplyTo: req.body.email,
        from: 'brent@buddingtrends.com', // sender address
        to: 'brent@buddingtrends.com', // list of receivers
        subject: 'Budding Trends - Contact', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log("This error - ",error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.render('contact', {msg:'Email has been sent'});
    });
});
