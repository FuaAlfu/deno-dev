---
stack: deno
lad: TS
---

## about Controllers & Models
we can display our routes by splitting our handler functions into
separate control of files and following the *MVC* convention a bit more..
MVC stand for model view controller.

## abc app - pack
[click here](https://deno.land/x/abc@v1.3.1)

## run denon - install it first
```
deno install -qAf --unstable https://deno.land/x/denon/denon.ts
```

## to run denon
```
denon run --allow-net app.ts
```

## to read a file :: html, etc
```
denon run --allow-read --allow-net app.ts
```

---