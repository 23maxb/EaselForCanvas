import express from "npm:express@4.21.0";
export function server(): number {
    const app = express();

    app.get("/", (req, res) => {
        res.send("Welcome to the Dinosaur API!");
    });

    app.listen(8000);
    return 0;
}
