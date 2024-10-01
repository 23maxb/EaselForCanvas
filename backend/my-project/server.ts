import express from "npm:express@4.21.0";
import env = Deno.env;
import { getCourses, getUserInfo } from "./Canvas/CanvasRequest.ts";
import User from "./Canvas/User.ts";
import { reset } from "https://deno.land/std@0.114.0/fmt/colors.ts";

export function server(): number {
    const app = express();

    app.get("/", (req: string, res: { send: (arg0: string) => void }) => {
        const b = new User(env.get("CANVAS_LMS_KEY") || "");
        /* const a = await getUserInfo(
            env.get("CANVAS_LMS_KEY") || "",
        );*/
        res.send(b.firstname || "failed");
    });

    app.listen(8000);
    return 0;
}
