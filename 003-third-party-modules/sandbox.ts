import { 
    camelCase,
    paramCase,
    pascalCase,
    snakeCase 
    } from "https://deno.land/x/case/mod.ts";

const txt = 'hello there';

const camel = camelCase(txt);
const param = paramCase(txt);
const pascal = pascalCase(txt);
const snake = snakeCase(txt);

console.log(camel);
console.log(param);
console.log(pascal);
console.log(snake);
console.log('---');
console.log(camel, param, pascal, snake);
