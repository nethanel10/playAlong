import nodemailer from "nodemailer"

const sendVerificationEmail = async (to, id) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        tls: {
          rejectUnauthorized: false
        },
        auth: {
          user: 'nethanelbd3@gmail.com',
          pass: 'eneufahjqesbkbqu'
      }
      
      });
    
    let info = await transporter.sendMail({
      from: 'PlayAlong',
      to: to,
      subject: "PlayAlong | Verification mail",
      html: `<a href='http://localhost:5000/users/verificate/${id}'>click here to verify your account</a>`
    });

}

export {sendVerificationEmail}