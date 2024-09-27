

export default class CanvasRequest{
    
    async getCourses() {
        const CANVAS_LMS_KEY = Deno.env.get("CANVAS_LMS_KEY");
        const CANVAS_LMS_URL = Deno.env.get("CANVAS_LMS_URL");
        try {
            console.log(CANVAS_LMS_KEY);
            const response = await axios.get(
                `${CANVAS_LMS_URL}/api/v1/courses`,
                {
                    headers: {
                        "Authorization": `Bearer ${CANVAS_LMS_KEY}`,
                    },
                },
            );
            return response.data;
        } catch (error) {
            console.error("Error fetching courses:", error);
        }
    }
}