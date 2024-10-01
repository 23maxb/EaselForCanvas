import axios, { AxiosResponse } from "npm:axios@1.7.7";

/**
 * This api accesses the canvas api:
 * https://canvas.instructure.com/doc/api/
 *
 * @param canvasKey the api key to access canvas lms
 * @param path path to resource. If you don't know how to access the correct path please call the other methods in this library.
 * @param headers headers to pass into the call
 * @param formInfo form information to pass into the call
 */
export default async function getResource(
    canvasKey: string | undefined,
    path: string,
    headers: Record<string, string>,
    formInfo: Record<string, string>,
    // deno-lint-ignore no-explicit-any
): Promise<AxiosResponse<any, any>> {
    const CANVAS_LMS_URL = Deno.env.get("CANVAS_LMS_URL");

    if (headers.Authorization === undefined) {
        if (canvasKey === undefined) throw new Error("No token provided.");
        else headers.Authorization = `Bearer ${canvasKey}`;
    }
    try {
        const response = await axios.get(
            CANVAS_LMS_URL + path,
            {
                headers: headers,
                params: formInfo,
            },
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching resource:", error);
    }
    throw new Error("Error fetching resource");
}

export function getCourses(canvasKey: string) {
    return getResource(canvasKey, "/api/v1/courses", {}, {});
}

export function getUserInfo(
    canvasKey: string,
    userId?: string | undefined,
) {
    const baseIncludes = [
        "locale",
        "avatar_url",
        "permissions",
        "email",
        "effective_locale",
        "uuid",
        "last_login",
    ];
    return getResource(
        canvasKey,
        `/api/v1/users/${userId || "self"}`,
        {},
        baseIncludes.reduce((acc, include) => {
            acc[`include[]`] = include;
            return acc;
        }, {} as Record<string, string>),
    );
}
