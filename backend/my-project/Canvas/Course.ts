type Enrollment = {
    type: string;
    role: string;
    role_id: number;
    user_id: number;
    enrollment_state: string;
    limit_privileges_to_course_section: boolean;
};

type Calendar = {
    ics: string;
};

type Permissions = {
    [key: string]: boolean;
};

type BlueprintRestrictions = {
    [key: string]: boolean;
};

type BlueprintRestrictionsByObjectType = {
    [key: string]: {
        [key: string]: boolean;
    };
};

export default class Course {
    id: number;
    sis_course_id: string | null;
    uuid: string;
    integration_id: string | null;
    sis_import_id: number;
    name: string;
    course_code: string;
    original_name: string;
    workflow_state: string;
    account_id: number;
    root_account_id: number;
    enrollment_term_id: number;
    grading_periods: string | null;
    grading_standard_id: number | null;
    grade_passback_setting: string | null;
    created_at: Date;
    start_at: Date;
    end_at: Date;
    locale: string;
    enrollments: Enrollment[] | null;
    total_students: number;
    calendar: Calendar | null;
    default_view: string;
    syllabus_body: string;
    needs_grading_count: number;
    term: string | null;
    course_progress: string | null;
    apply_assignment_group_weights: boolean;
    permissions: Permissions;
    is_public: boolean;
    is_public_to_auth_users: boolean;
    public_syllabus: boolean;
    public_syllabus_to_auth: boolean;
    public_description: string;
    storage_quota_mb: number;
    storage_quota_used_mb: number;
    hide_final_grades: boolean;
    license: string;
    allow_student_assignment_edits: boolean;
    allow_wiki_comments: boolean;
    allow_student_forum_attachments: boolean;
    open_enrollment: boolean;
    self_enrollment: boolean;
    restrict_enrollments_to_course_dates: boolean;
    course_format: string;
    access_restricted_by_date: boolean;
    time_zone: string;
    blueprint: boolean;
    blueprint_restrictions: BlueprintRestrictions;
    blueprint_restrictions_by_object_type: BlueprintRestrictionsByObjectType;
    template: boolean;
    homeroom_course: boolean;
    course_color: string | null;
    friendly_name: string | null;

    constructor(data: any) {
        this.id = data.id;
        this.sis_course_id = data.sis_course_id;
        this.uuid = data.uuid;
        this.integration_id = data.integration_id;
        this.sis_import_id = data.sis_import_id;
        this.name = data.name;
        this.course_code = data.course_code;
        this.original_name = data.original_name;
        this.workflow_state = data.workflow_state;
        this.account_id = data.account_id;
        this.root_account_id = data.root_account_id;
        this.enrollment_term_id = data.enrollment_term_id;
        this.grading_periods = data.grading_periods;
        this.grading_standard_id = data.grading_standard_id;
        this.grade_passback_setting = data.grade_passback_setting;
        this.created_at = new Date(data.created_at);
        this.start_at = new Date(data.start_at);
        this.end_at = new Date(data.end_at);
        this.locale = data.locale;
        this.enrollments = data.enrollments;
        this.total_students = data.total_students;
        this.calendar = data.calendar;
        this.default_view = data.default_view;
        this.syllabus_body = data.syllabus_body;
        this.needs_grading_count = data.needs_grading_count;
        this.term = data.term;
        this.course_progress = data.course_progress;
        this.apply_assignment_group_weights = data.apply_assignment_group_weights;
        this.permissions = data.permissions;
        this.is_public = data.is_public;
        this.is_public_to_auth_users = data.is_public_to_auth_users;
        this.public_syllabus = data.public_syllabus;
        this.public_syllabus_to_auth = data.public_syllabus_to_auth;
        this.public_description = data.public_description;
        this.storage_quota_mb = data.storage_quota_mb;
        this.storage_quota_used_mb = data.storage_quota_used_mb;
        this.hide_final_grades = data.hide_final_grades;
        this.license = data.license;
        this.allow_student_assignment_edits = data.allow_student_assignment_edits;
        this.allow_wiki_comments = data.allow_wiki_comments;
        this.allow_student_forum_attachments = data.allow_student_forum_attachments;
        this.open_enrollment = data.open_enrollment;
        this.self_enrollment = data.self_enrollment;
        this.restrict_enrollments_to_course_dates = data.restrict_enrollments_to_course_dates;
        this.course_format = data.course_format;
        this.access_restricted_by_date = data.access_restricted_by_date;
        this.time_zone = data.time_zone;
        this.blueprint = data.blueprint;
        this.blueprint_restrictions = data.blueprint_restrictions;
        this.blueprint_restrictions_by_object_type = data.blueprint_restrictions_by_object_type;
        this.template = data.template;
        this.homeroom_course = data.homeroom_course;
        this.course_color = data.course_color;
        this.friendly_name = data.friendly_name;
    }
}