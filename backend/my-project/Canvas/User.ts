import Course from "./Course.ts";
import { getCourses, getUserInfo } from "./CanvasRequest.ts";
import ResourceMap = Deno.ResourceMap;

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
    courses: Course[] | undefined;

    constructor(token: string) {
        this.token = token;
    }

    async init() {
        this.rawData = await getUserInfo(this.token);
    }

    async initCourses() {
        const rawCourses =await  Course.fromUser(this.token);
    }

    async getResource(resource: string): Promise<string> {
        if (resource.startsWith("course_")) {
            if (this.courses === undefined) {
                await this.initCourses();
            }
            const requestedCourseData = resource.split("_");
        }
        if (!USER_RESOURCES.has(resource)) {
            throw new Error(
                `Invalid resource. User resources available: ${resource}`,
            );
        }
        if (this.rawData === undefined) {
            await this.init();
        }
        return this.rawData[resource];
    }
}
