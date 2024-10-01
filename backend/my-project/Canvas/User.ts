import Course from "./Course.ts";
import { getCourses, getUserInfo } from "./CanvasRequest.ts";
import build = Deno.build;

/** */
export default class User {
    name: string | undefined;
    preferredname: string | undefined;
    firstname: string | undefined;
    lastname: string | undefined;
    id: string | undefined;
    avatar: URL | undefined;
    courses: Course[] | undefined;
    token: string;
    rawData: JSON | undefined;
    constructor(token: string) {
        this.token = token;

        this.buildUser(token).then((_result) => {
            this.rawData = _result;
        });
        return this;
    }

    /**
     * sample json output:
     * ```{"id":17880000000077160,"name":"Max Blennemann","created_at":"2023-05-30T18:05:47-07:00","sortable_name":"Blennemann, Max","short_name":"Max Blennemann","avatar_url":"https://canvas.instructure.com/images/messages/avatar-50.png","last_name":"Blennemann","first_name":"Max","locale":null,"effective_locale":"en","last_login":"2024-09-30T12:08:20-07:00","permissions":{"can_update_name":true,"can_update_avatar":true,"limit_parent_app_web_access":false}}```
     * Idk why the linter says this is wrong apparantly it works lmao
     */
    async buildUser(token: string) {
        //this.buildCourses(token).then((_result: any) => {});
        try {
            const response = await getUserInfo(token);
            this.name = response["name"];
            this.preferredname = response["short_name"];
            this.firstname = response["first_name"];
            console.log(response["first_name"]);
            this.lastname = response["last_name"];
            this.id = response["id"];
            this.avatar = new URL(response["avatar_url"]);
            console.log("hji");
            return response;
        } catch (error) {
            console.error("Error in buildUser:", error);
            throw error;
        }
    }

    async buildCourses(token: string) {
        try {
            const response = await getCourses(token);
            console.log(response);
            this.courses = response.map((course: any) => new Course(course));
        } catch (error) {
            console.error("Error in buildCourses:", error);
            throw error;
        }
    }
}
