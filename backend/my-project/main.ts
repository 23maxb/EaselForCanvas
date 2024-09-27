import { server } from "./server.ts";

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
export function startServer(): void {
    console.log("Starting Server...");
    server();
}

if (import.meta.main) {
    startServer();
}
