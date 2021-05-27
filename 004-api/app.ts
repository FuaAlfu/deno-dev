import { Application, Context } from "https://deno.land/x/abc@v1.3.1/mod.ts";

const app = new Application();

// routes  :: ctx special type
app.get('/', async(ctx: Context) =>{
    console.log('request made');
    await ctx.file('./public/index.html')
});

//listen to port
app.start({port: 3000});