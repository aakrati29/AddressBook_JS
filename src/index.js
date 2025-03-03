const contact = require('./model/Contact');



const contact1 = new contact(
    "Aakrati", "Barsaiyan", "Chhatarpur", "India", "In", "2002", "9854271632", "aakrati44@gmail.com");

console.log(contact1.display());