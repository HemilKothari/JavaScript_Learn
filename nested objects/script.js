class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const p1 = new Person("John", 24, "a street", "b city", "c country");
const p2 = new Person("Jane", 28, "d street", "e city", "f country");
const p3 = new Person("Jon", 20, "g street", "h city", "i country");

console.log(p1.address)