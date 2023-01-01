import nodemailer from "nodemailer"

const sendVerificationEmail = async (to, id) => {

    let transporter = nodemailer.createTransport({
        host: "127.0.0.1",
        port: 1025,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "PlayAlongService@proton.me", 
          pass: "playAlong100100"
        }, 
        tls: {
            rejectUnauthorized: false
        }
      });
    
    let info = await transporter.sendMail({
      from: 'PlayAlong',
      to: to,
      subject: "PlayAlong | Verification mail",
      html: `<a href='http://localhost:5000/users/verificate/${id}'`
    });

}

export {sendVerificationEmail}