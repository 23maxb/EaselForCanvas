export default class User {
    name: string;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, ${this.name}`;
    }
    getAge() {
        return this.age;
    }
}