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

    addContact(contact) {
        const isDuplicate = this.contacts.some(existingContact =>
            existingContact.firstName.toLowerCase() === contact.firstName.toLowerCase() &&
            existingContact.lastName.toLowerCase() === contact.lastName.toLowerCase()
        );

        if (isDuplicate) {
            console.log(`Contact ${contact.firstName} ${contact.lastName} already exists!`);
            return;
        }

        this.contacts.push(contact);
        console.log(`Contact ${contact.firstName} ${contact.lastName} added successfully!`);
    }

    listContactsByCity(city) {
        return this.contacts
            .filter(contact => contact.city.toLowerCase() === city.toLowerCase())
            .map(contact => `${contact.firstName} ${contact.lastName}`);
    }

    listContactsByState(state) {
        return this.contacts
            .filter(contact => contact.state.toLowerCase() === state.toLowerCase())
            .map(contact => `${contact.firstName} ${contact.lastName}`);
    }

    countByCity(city) {
        return this.contacts.reduce((count, contact) =>
            contact.city.toLowerCase() === city.toLowerCase() ? count + 1 : count, 0);
    }

    countByState(state) {
        return this.contacts.reduce((count, contact) =>
            contact.state.toLowerCase() === state.toLowerCase() ? count + 1 : count, 0);
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

    //Get total number of contacts
    getContactCount() {
        return this.contacts.reduce((count) => count + 1, 0);
    }

    listAllNames() {
        return this.contacts.map(contact => `${contact.firstName} ${contact.lastName}`);
    }

    sortContactsByName() {
        this.contacts.sort((a, b) => {
            const nameA = (a.firstName + " " + a.lastName).toLowerCase();
            const nameB = (b.firstName + " " + b.lastName).toLowerCase();
            return nameA.localeCompare(nameB);
        });
        console.log("\nContacts sorted alphabetically by name:");
        this.contacts.forEach(contact => console.log(contact.toString()));
    }

    sortContactsByCity() {
        this.contacts.sort((a, b) => a.city.localeCompare(b.city));
        console.log("\nContacts sorted by City:");
        this.contacts.forEach(contact => console.log(contact.toString()));
    }
    
    sortContactsByState() {
        this.contacts.sort((a, b) => a.state.localeCompare(b.state));
        console.log("\nContacts sorted by State:");
        this.contacts.forEach(contact => console.log(contact.toString()));
    }
    
    sortContactsByZip() {
        this.contacts.sort((a, b) => a.zip.toString().localeCompare(b.zip.toString()));
        console.log("\nContacts sorted by Zip:");
        this.contacts.forEach(contact => console.log(contact.toString()));
    }
    
}

module.exports = AddressBook;