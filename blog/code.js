const sendGridid = require("@sendgrid/mail")
sendGrid.setApiKey(apiKey)

async function sendEmail(){
const messageData = {
    to:'sarzfull2001@gmail.com'   ,
    from:'mahdiabderrahmen@duck.com ' , 
    subject:'meow',
    text:"meow",
    html : "<p> this is a test </p>"
};
try {
    await sendGrid.send(messageData);
    console.log("Message sent"); } 
    catch (error) {
        console.log("error");
    }
}
sendEmail()