//Reading files
const decoder = new TextDecoder('utf-8');

//top level await :: without using async
const data = await Deno.readFile('readme.txt');
console.log(decoder.decode(data));

//Writing files
const encoder = new TextEncoder();
const txt = encoder.encode('hello again everyone !');
await Deno.writeFile('readme2.txt', txt);