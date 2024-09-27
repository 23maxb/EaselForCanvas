import axios from "npm:axios@1.7.7";

export default async function getResource(
    canvasKey: string | undefined,
    path: string,
    headers: Record<string, string>,
    formInfo: Record<string, string>,
): Promise<Blob> {
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

export function getCourses(canvasKey: string): Promise<Blob> {
    return getResource(canvasKey, "/api/v1/courses", {}, {});
}

export async function getUserInfo(
    canvasKey: string,
    userId: string | undefined,
): Promise<Blob> {
    const baseIncludes = [
        "locale",
        "avatar_url",
        "permissions",
        "email",
        "effective_locale",
        "uuid",
        "last_login",
    ];
    return await getResource(
        canvasKey,
        `/api/v1/users/${userId || "self"}`,
        {},
        baseIncludes.reduce((acc, include) => {
            acc[`include[]`] = include;
            return acc;
        }, {} as Record<string, string>),
    );
}
