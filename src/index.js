const contact = require('./model/Contact');
const AddressBook = require('./service/AddressBook');

try {
    let addressBook = new AddressBook();

    const contact1 = new contact("Aakrati", "Barsaiyan", "Chhatarpur", "MP", "India", "20002", "9854271632", "aakrati44@gmail.com");

    const contact2 = new contact("Ram", "Gupta", "Indore", "MP", "India", 40125, "5157852252", "ramgupta@gmail.com");

    addressBook.addContact(contact1);
    addressBook.addContact(contact2);

    addressBook.displayAllContacts();

    console.log("\nFinding Contact: Aakrati Barsaiyan");
    let foundContact = addressBook.findContact("Aakrati", "Barsaiyan");
    if (foundContact) foundContact.display();
    else console.log("Contact not found!");

    console.log("\nEditing Contact: Aakrati Barsaiyan");
    addressBook.editContact("Aakrati", "Barsaiyan", { city: "Bhopal", phoneNumber: "9999999999" });


    addressBook.displayAllContacts();
    } 

    catch (error) {
    console.error(error.message);
    }