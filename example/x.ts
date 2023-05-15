import { add, sh, elvish } from "../mod.ts";

// console.log(add(3,4))

const { code, stdout, stderr } = await elvish("fd | each { |x| echo 'f: '$x }");
console.log(code);
console.log(stdout);
console.log(stderr);
