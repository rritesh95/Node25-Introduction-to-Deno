import { serve } from "https://deno.land/std@0.114.0/http/server_legacy.ts";

const server = serve({ port: 3000 });

for await (const req of server) {
  req.respond({ body: "Hello World\n" });
}
// above code explained by instructor has deprecated dependencies

// import { listenAndServe } from "https://deno.land/std@0.114.0/http/server.ts";

// listenAndServe(":8000", () => new Response("Hello World\n"));

// console.log("http://localhost:8000/");