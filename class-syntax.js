/*
In a new file create a parent class of Computer.
Constructor should take in brand, OS, and type parameters.
Create an instance method called powerOn that logs the message `{brand} {type} powers on with {OS}.`
Create a static method that takes in an array of computer instances and calls the powerOn method on each.
Create 2 instances of the Computer class.
Perform local tests to verify the methods behave as expected.
Submit a link to the repo with your code.
*/

class Computer {
    constructor(brand, os, type) {
        this.brand = brand;
        this.os = os;
        this.type = type;
    }

    powerOn() {
        console.log(`${this.brand} ${this.type} powers on with ${this.os}`);
    }

    static powerOnAll(computers) {
        computers.forEach( computer => computer.powerOn() )
    }

}

const mac = new Computer("apple", "mac os", "mac book pro");
const chromeBook = new Computer("Google", "google os", "chromeBook");

mac.powerOn();

Computer.powerOnAll([mac, chromeBook]);