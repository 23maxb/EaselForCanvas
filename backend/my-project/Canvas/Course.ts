import { getCourses } from "./CanvasRequest.ts";
import { USER_RESOURCES } from "./User.ts";
export const COURSE_RESOURCES = new Set([
    "id",
    "name",
    "account_id",
    "uuid",
    "start_at",
    "grading_standard_id",
    "is_public",
    "created_at",
    "course_code",
    "default_view",
    "root_account_id",
    "enrollment_term_id",
    "license",
    "grade_passback_setting",
    "end_at",
    "public_syllabus",
    "public_syllabus_to_auth",
    "storage_quota_mb",
    "is_public_to_auth_users",
    "homeroom_course",
    "course_color",
    "friendly_name",
    "apply_assignment_group_weights",
    "calendar",
    "time_zone",
    "blueprint",
    "template",
    "enrollments",
    "hide_final_grades",
    "workflow_state",
    "restrict_enrollments_to_course_dates",
]);

export default class Course {
    id: string;
    rawData: string;
    constructor(courseData: string | Record<string, any>) {
        console.log("constructor: " + courseData);
        if (typeof courseData === "string") {
            this.rawData = JSON.parse(courseData);
            this.id = this.getResource("id");
        } else {
            this.rawData = courseData.toString();
            this.id = courseData.id;
        }
    }

    getResource(resource: string): string {
        if (!COURSE_RESOURCES.has(resource)) {
            throw new Error(
                `${resource} is not a valid resource. Course resources available: ${COURSE_RESOURCES}`,
            );
        }
        return this.rawData[resource];
    }

    static async fromUser(token: string): Promise<Course[]> {
        const b = getCourses(token);
        return b.then((data) => {
            let toReturn: Course[] = [];
            for (let i = 0; i < data.length; i++) {
                console.log(data[i]);
                toReturn[i] = new Course(data[i]);
            }
            return toReturn;
        });
    }
}
