import { getCourses } from "./CanvasRequest.ts";

export default class Course {
    id: string;
    rawData: JSON;
    contructor(courseData: string) {
        this.rawData = JSON.parse(courseData);
    }

    static async fromUser(token: string): Course[] {
        const couseData = await getCourses(token);
    }

    getResource(resource: string): string {
        return this.rawData[resource];
    }
}
