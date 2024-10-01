import express from "npm:express@4.21.0";
import env = Deno.env;
import User from "./Canvas/User.ts";
import { reset } from "https://deno.land/std@0.114.0/fmt/colors.ts";

const port = 8000;
export function server(): number {
    const app = express();
    app.listen(port);
    app.get("/", async (req: string, res: { send: (arg0: string) => void }) => {
        let b = new User(env.get("CANVAS_LMS_KEY") || "");
        await b.init();
        res.send(await b.getResource("name") || "name fetch failed");
    });

    console.log(`Server spawned on localhost:${port}`);
    return 0;
}
