//uuid module
import { v4 } from "https://deno.land/std@0.97.0/uuid/mod.ts";

const uid = v4.generate();
console.log(uid);

// fs module :: https://deno.land/std@0.97.0/fs/mod.ts
import {readJson, writeJson} from "https://deno.land/std@0.97.0/fs/mod.ts";
const jsonObject = await readJson('data.json');
console.log(jsonObject);


// http module (server)
//todo