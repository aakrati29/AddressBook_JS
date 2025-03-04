const contact = require('./model/Contact');
const AddressBook = require('./service/AddressBook');

try {
    let addressBook = new AddressBook();

    const contact1 = new contact("Aakrati", "Barsaiyan", "Bhopal", "MP", "India", "20002", "9854271632", "aakrati44@gmail.com");

    const contact2 = new contact("Ram", "Gupta", "Indore", "MP", "India", 40125, "5157852252", "ramgupta@gmail.com");

<<<<<<< HEAD
    const duplicateContact = new contact("Aakrati", "Barsaiyan", "Bhopal", "MP", "India", "20002", "9854271632", "aakrati44@gmail.com");
=======
    const contact3 = new contact("Ankiet", "Gupta", "Sagar", "MP", "India", 47715, "5621479933", "aniketgupta@gmail.com");

    const duplicateContact = new contact("Aakrati", "Barsaiyan", "Bhopal", "MP", "India", "20002", "9854271632", "aakrati99@gmail.com");
>>>>>>> UC10

    addressBook.addContact(contact1);
    addressBook.addContact(contact2);
    addressBook.addContact(contact3);
    addressBook.addContact(duplicateContact);

    addressBook.displayAllContacts();
    console.log("\nList of Names in Address Book:", addressBook.listAllNames());

    console.log(`\nTotal Contacts: ${addressBook.getContactCount()}`);

    console.log("\nFinding Contact: Aakrati Barsaiyan");
    let foundContact = addressBook.findContact("Aakrati", "Barsaiyan");
    if (foundContact) foundContact.display();
    else console.log("Contact not found!");

    console.log("\nEditing Contact: Aakrati Barsaiyan");
    addressBook.editContact("Aakrati", "Barsaiyan", { city: "Bhopal", phoneNumber: "9999999999" });

    //Get total contacts
    console.log(`\nTotal Contacts in Address Book: ${addressBook.getContactCount()}`);

    console.log("\nDeleting Contact: Ram Gupta");
    addressBook.deleteContact("Ram", "Gupta");
    
    addressBook.displayAllContacts();
    
    let searchCity = "Bhopal";
    let searchState = "India";

    console.log(`\nContacts in City '${searchCity}':`, addressBook.listContactsByCity(searchCity));
    console.log(`Total contacts in '${searchCity}':`, addressBook.countByCity(searchCity));

    console.log(`\nContacts in State '${searchState}':`, addressBook.listContactsByState(searchState));
    console.log(`Total contacts in '${searchState}':`, addressBook.countByState(searchState));

}
    catch (error) {
    console.error(error.message);
    }