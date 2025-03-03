const contact = require('./model/Contact');
const AddressBook = require('./service/AddressBook');

try {
    let addressBook = new AddressBook();

    const contact1 = new contact("Aakrati", "Barsaiyan", "Chhatarpur", "MP", "India", "20002", "9854271632", "aakrati44@gmail.com");

    const contact2 = new contact("Ram", "Gupta", "Indore", "MP", "India", 40125, "5157852252", "ramgupta@gmail.com");

    addressBook.addContact(contact1);
    addressBook.addContact(contact2);

    addressBook.displayAllContacts();
    } 

    catch (error) {
    console.error(error.message);
    }