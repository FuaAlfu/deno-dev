//Reading files
//const decoder = new TextDecoder('utf-8');

//top level await :: without using async
//const data = await Deno.readFile('readme.txt');
//console.log(decoder.decode(data));

//another method to read
const data = await Deno.readTextFile('readme.txt');
console.log();data

//Writing files
const encoder = new TextEncoder();
const txt = encoder.encode('hello again everyone !');
await Deno.writeFile('readme2.txt', txt);

//--------------

//renaming and removing files
await Deno.rename('renameMe.txt','deleteme.txt');
await Deno.remove('deleteme.txt');