# shx

```
import shx from 'https://deno.land/x/shx/mod.ts'; 

const result = await shx.elvish(`ls -al`);
console.log("code:", result.code);
console.log("stdout: ", result.stdout);
console.log("stderr: ", result.stderr);
```
