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
    rawCourses: JSON[] | undefined;

    constructor(token: string) {
        this.token = token;
    }

    async init() {
        this.rawData = await getUserInfo(this.token);
    }

    async initCourses() {
        this.rawCourses = await getCourses(this.token);
        console.log(this.rawCourses);
    }

    async getResource(resource: string): Promise<string> {
        if (resource.startsWith("course_")) {
            const requestedCourseData = resource.split("_");
            if (this.rawCourses === undefined) {
                await this.initCourses();
            }
            if (resource.length == 2) {
                return this.rawCourses[requestedCourseData[1]];
            }
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
