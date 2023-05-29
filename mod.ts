const shellexec =
  (shell: string) =>
  async (
    cmd: string
  ): Promise<{ code: number; stdout: string; stderr: string }> => {
    const command = new Deno.Command(shell, { args: ["-c", cmd] });
    const { code, stdout, stderr } = await command.output();
    const td = new TextDecoder();
    return {
      code: code,
      stdout: td.decode(stdout),
      stderr: td.decode(stderr),
    };
  };

export const sh = shellexec("sh");
export const bash = shellexec("bash");
export const fish = shellexec("fish");
export const elvish = shellexec("elvish");

const shx = {
  sh: sh,
  bash: bash,
  fish: fish,
  elvish: elvish,
};

export default shx;
