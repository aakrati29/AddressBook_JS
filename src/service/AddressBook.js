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

    findContact(firstName, lastName) {
        return this.contacts.find(contact => 
            contact.firstName.toLowerCase() === firstName.toLowerCase() &&
            contact.lastName.toLowerCase() === lastName.toLowerCase()
        );
    }

    editContact(firstName, lastName, newDetails) {
        let contact = this.findContact(firstName, lastName);
        if (!contact) {
            console.log("Contact not found!");
            return;
        }

        if (newDetails.address) contact.address = newDetails.address;
        if (newDetails.city) contact.city = newDetails.city;
        if (newDetails.state) contact.state = newDetails.state;
        if (newDetails.zip) contact.zip = contact.validateZip(newDetails.zip);
        if (newDetails.phoneNumber) contact.phoneNumber = contact.validatePhoneNumber(newDetails.phoneNumber);
        if (newDetails.email) contact.email = contact.validateEmail(newDetails.email);

        console.log("Contact updated successfully!");
    }

    deleteContact(firstName, lastName) {
        const index = this.contacts.findIndex(contact => 
            contact.firstName.toLowerCase() === firstName.toLowerCase() &&
            contact.lastName.toLowerCase() === lastName.toLowerCase()
        );

        if (index !== -1) {
            this.contacts.splice(index, 1);
            console.log(`Contact ${firstName} ${lastName} deleted successfully!`);
        } else {
            console.log("Contact not found!");
        }
    }
}

module.exports = AddressBook;
