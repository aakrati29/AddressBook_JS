class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = this.validateName(firstName);
        this.lastName = this.validateName(lastName);
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = this.validateZip(zip);
        this.phoneNumber = this.validatePhoneNumber(phoneNumber);
        this.email = this.validateEmail(email);
    }

    validateName(name) {
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(name)) {
            throw new Error("Invalid Name! Name should start with a capital letter and have at least 3 characters.");
        }
        return name;
    }

    validateZip(zip) {
        if (!/^\d{5}(-\d{4})?$/.test(zip)) {
            throw new Error("Invalid Zip Code! Must be in 5-digit.");
        }
        return zip;
    }

    validatePhoneNumber(phoneNumber) {
        if (!/^\d{10}$/.test(phoneNumber)) {
            throw new Error("Invalid Phone Number! Must be exactly 10 digits.");
        }
        return phoneNumber;
    }

    validateEmail(email) {
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            throw new Error("Invalid Email Address!");
        }
        return email;
    }

    toString() {
        return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, ${this.city}, ${this.state} ${this.zip}, Phone: ${this.phoneNumber}, Email: ${this.email}`;
    }
    

    display() {
        console.log(`Name: ${this.firstName} ${this.lastName}`);
        console.log(`Address: ${this.address}, ${this.city}, ${this.state} ${this.zip}`);
        console.log(`Phone Number: ${this.phoneNumber}`);
        console.log(`Email: ${this.email}`);
    }
}

module.exports = Contact;
