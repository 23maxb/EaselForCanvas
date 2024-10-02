import Course from "./Course.ts";
import { getUserInfo } from "./CanvasRequest.ts";

export const USER_RESOURCES = new Set([
    "name",
    "id",
    "created_at",
    "sortable_name",
    "short_name",
    "avatar_url",
    "last_name",
    "first_name",
    "locale",
    "effective_locale",
    "last_login",
    "permissions",
]);

export default class User {
    token: string;
    rawData: Record<string, any> | undefined;
    courses: Promise<Course[]> | undefined;

    constructor(token: string) {
        this.token = token;
    }

    async init() {
        this.rawData = await getUserInfo(this.token);
    }

    async initCourses(): Promise<Course[]> {
        this.courses = Course.fromUser(this.token);
        return this.courses;
    }

    async getResource(resource: string): Promise<string> {
        if (resource.startsWith("course_")) {
            if (this.courses === undefined) {
                await this.initCourses();
            }
            const requestedCourseData = resource.split("_");
            
            if (requestedCourseData[1] == "list") {
                return (this.courses[0]);
            }
        }
        if (!USER_RESOURCES.has(resource)) {
            throw new Error(
                `${resource} is not a valid resource. User resources available:`,
            );
        }
        if (this.rawData === undefined) {
            await this.init();
        }
        return this.rawData[resource];
    }
}
