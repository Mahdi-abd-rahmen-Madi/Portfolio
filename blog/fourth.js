const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('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');
const msg = {
  to: 'sarzfull2001@gmail.com', // Change to your recipient
  from: 'mahdiabderrahmen@duck.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })

