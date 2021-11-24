// let message : string;

// message = "Hi there!";

// console.log(message);

const text = "This is a test - and we will stor eit in file";

const encoder = new TextEncoder();
const data = encoder.encode(text);

Deno.writeFile("message.txt", data).then(() => {
    // "Deno.writeFile" will fail as in Deno bydefault we don't have permission to write in to 
    // files as part of security mechanism, we have to explicitly tell Deno to do that. This is
    // not the case with NodeJs. 
    console.log("wrote to file!");
});

// run with command deno run --allow-write app.ts