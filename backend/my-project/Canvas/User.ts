import Course from "./Course.ts";

/** */
export default class User {
    name: string | undefined;
    preferredname: string | undefined;
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

    async buildUser(token: string): Promise<JSON> {
        CanvasRequest.getUserInfo();
    }
}
