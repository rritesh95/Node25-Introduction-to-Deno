import { Application } from "https://deno.land/x/oak/mod.ts";

import todoRoutes from './routes/todo.ts';

const app = new Application();

app.use(async (context, next) => {
  //ctx.response.body = "Hello World!"; // this will send automatic response to requests
  console.log("middleware!!!");
  await next(); //this line tells "oak" to wait for all its middleware to complete before sending response
  // "await" here is neccessory because in our routes we are doing some "async" operations
}); 

app.use(todoRoutes.routes());
app.use(todoRoutes.allowedMethods());

await app.listen({ port: 3000 });