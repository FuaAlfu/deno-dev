import { serve } from "https://deno.land/std@0.97.0/http/server.ts";
const server = serve({port: 9090});
console.log('serverin on port 9090');

for await (const req of server) {
    console.log('request made..');
    req.respond({body: `hi there!`});
}