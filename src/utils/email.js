const { createTransport } = require('nodemailer');

// irina-beg777@ukr.net
// ira0806201777

const sendMail = (name, phone, email) => {
  const host = 'smtp.ukr.net';
  const port = 465
  const user = 'irina-beg777@ukr.net';
  const pass = 'ira0806201777';
  
  const transport = createTransport({
      maxMessages: 100,
      maxConnections: 5,
      pool: true,
      host,
      port,
      secure: true,
      auth: { user, pass },
      rateLimit:10,
      name:'agileengine.com'
  });

  const from = 'irina-beg777@ukr.net';

  const html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Client</title>

      <style>
        .preview {
          mso-hide: all;
          position: fixed;
          height: 0;
          max-height: 0;
          overflow: hidden;
          font-size: 0;
        }
      </style>
    </head>
    <body>
      <div class="preview">
        Hey, new client here!
      </div>
      <ul>
        <li>Name:${name}</li>
        <li>Phone:${phone}</li>
        <li>Email:${email ? email : 'none'}</li>
      </ul>
    </body>
  </html>
  `

  const mails = ['yudenkovandre@gmail.com'].map((to)=>{
      return transport.sendMail({envelope:{from, to}, html,subject:"New client"})
  })

  Promise.allSettled(mails).then(r=>{
      console.log(r);
  }).catch(e=>{
      console.error(e);
  })
}

module.exports = sendMail;






