const nodemailer = require( "nodemailer" );

const sendMail = ( requestBody ) => {
    var transporter = nodemailer.createTransport( {
        "service": "gmail",
        "auth": {
            "user": process.env.FROM_EMAIL,
            "pass": process.env.FROM_PW
        }
    } );

    var mailOptions = {
        "from": process.env.FROM_EMAIL,
        "to": process.env.TO_EMAIL,
        "subject": requestBody.subject,
        "text": requestBody.message
    };

    return transporter.sendMail( mailOptions );
};

module.exports = sendMail;
