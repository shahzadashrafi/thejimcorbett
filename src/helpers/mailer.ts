import User from '@/models/user.model';
import nodemailer from 'nodemailer';
import bcryptjs from 'bcryptjs';

//the function is async because mail takes time to handle server and client side requests ... 
// Object of three parameters values contains email of party, emailType for verify, forgot, userId for user id. user model is imported
export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);
    //if user verification emailType then code execute
    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        $set:{
          verifyToken: hashedToken,
          verifyTokenExpiry: Date.now() + 3600000,
        }
      });
    } 
    //if user reset password then code execute
    else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          forgotPasswordToken: hashedToken,
          forgotPasswordTokenExpiry: Date.now() + 3600000,
        }
      });
    }

    //MAIL SERVER CONFIGURATIONS HERE
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "150c598f3da4ae",
        pass: "b4945c4c730b0d"
      }
    });

    //MAIL DESIGNING VARIABLES
    const mailOptions = {
      from: 'support@thejimcorbett.com', 
      to: email,
      subject:
        emailType === "VERIFY" ? "The Jim Corbett | Verify Your Registration on The Jim Corbett" : "The Jim Corbett | Password Recovery",
      text: "Hello Dear, ",
      html: `<p>Click <a href='${process.env.DOMAIN}/verifyemail?token=${hashedToken}'></a> to ${emailType==='VERIFY' ? 'Verify your email' : 'Reset Your Password'} or copy and paste url in browser ${process.env.DOMAIN}/verifyemail/${hashedToken}</p>`,
    };

    
    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};