import express from "npm:express@4.21.0";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import axios from "npm:axios@1.7.7";
import env = Deno.env;

async function getCourses() {
    
    const CANVAS_LMS_KEY = env.get("CANVAS_LMS_KEY");
    try {
        console.log(CANVAS_LMS_KEY);
        const response = await axios.get(
            "https://canvas.instructure.com/api/v1/courses",
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

export function server(): number {
    const app = express();

    app.get("/", async (req: string, res: { send: (arg0: void) => void }) => {
        let a = getCourses();
        res.send(await a);
    });

    app.listen(8000);
    return 0;
}
