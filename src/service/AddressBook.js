const Contact = require("../model/Contact"); 
class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        if (contact instanceof Contact) {
            this.contacts.push(contact);
            console.log("Contact added successfully!");
        } else {
            throw new Error("Invalid contact. Please provide a valid Contact object.");
        }
    }

    displayAllContacts() {
        if (this.contacts.length === 0) {
            console.log("No contacts in the address book.");
            return;
        }
        console.log("\nAddress Book Contacts:");
        this.contacts.forEach((contact, index) => {
            console.log(`\nContact ${index + 1}:`);
            contact.display();
        });
    }
}

module.exports = AddressBook;
