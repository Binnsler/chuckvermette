const nodemailer = require( "nodemailer" );

const sendMail = ( requestBody ) => {
    var transporter = nodemailer.createTransport( {
        "service": "gmail",
        "auth": {
            "user": "jamie.m.binns@gmail.com",
            "pass": "TinyStudio1!"
        }
    } );

    var mailOptions = {
        "from": "jamie.m.binns@gmail.com",
        "to": "cavermette@gmail.com",
        "subject": requestBody.subject,
        "text": requestBody.message
    };

    return transporter.sendMail( mailOptions );
};

module.exports = sendMail;
