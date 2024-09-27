import Course from "./Course.ts";

/** */
export default class User {
    name: string;
    preferredname: string | undefined;
    courses: Course[] | undefined;

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
