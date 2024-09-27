export default class Course {
    name: string;
    id: number;
    rawData: JSON;

    constructor(rawData: string) {
        const json = JSON.parse(rawData);
        this.name = json.name;
        this.id = json.id;
        this.rawData = json;
    }
}
