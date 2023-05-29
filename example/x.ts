import shx from "../mod.ts";

const result = await shx.elvish(`fd | each { |x| echo 'file: '$x }`);
// const { code, stdout, stderr } = await shx.elvish("fd | each { |x| echo 'file: '$x }");
console.log("code:", result.code);
console.log("stdout: ", result.stdout);
console.log("stderr: ", result.stderr);
