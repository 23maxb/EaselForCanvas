import express from "npm:express@4.21.0";
import env = Deno.env;
import { getCourses, getUserInfo } from "./Canvas/CanvasRequest.ts";

export function server(): number {
    const app = express();

    app.get("/", async (req: string, res: { send: (arg0: Blob) => void }) => {
        const a = await getUserInfo(
            env.get("CANVAS_LMS_KEY") || "",
        );
        res.send(await a);
    });

    app.listen(8000);
    return 0;
}
