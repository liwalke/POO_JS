/*
    Link pica - https://www.javascripttutorial.net/javascript-private-methods/
*/

class Person {
    //Private attributes:
    #firstName;
    #lastName;

    //Constructor
    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    //Public method:
    getFullName(format = true) {
        return format ? this.#firstLast() : this.#lastFirst();
    }

    //Private methods:
    #firstLast() {
        return `${this.#firstName} ${this.#lastName}`;
    }
    #lastFirst() {
        return `${this.#lastName}, ${this.#firstName}`;
    }
}

let person = new Person('John', 'Doe');
console.log(person.getFullName());