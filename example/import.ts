// import shx from "https://raw.githubusercontent.com/aca/shx/main/mod.ts";
import shx from 'https://deno.land/x/shx/mod.ts'; 

const result = await shx.elvish(`ls -al`);
// const { code, stdout, stderr } = await shx.elvish("fd | each { |x| echo 'file: '$x }");
console.log("code:", result.code);
console.log("stdout: ", result.stdout);
console.log("stderr: ", result.stderr);
