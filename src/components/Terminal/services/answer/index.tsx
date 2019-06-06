const files: any = {
  "cv": "Full-stack JavaScript engineer. Specialized in Node and React / React Native. \n Working on my Computer Science BSc in Hong Kong & Innsbruck.",
  "advice": "If you happen to design a product: Satisfaction costs 9 units of work. Bliss costs 10 units. If you create something, you might as well do it really well. It is not that much extra work. But it creates raving, returning users. And feels great. Who wants to work on something that's just 'ok'? Nobody.",
  "contact": "Shoot me an Email at jakob. wallnoefer @outlook.com. I read them all."
}

interface Shell {
  ls: () => string[],
  cat: (args: string[]) => string[],
  help: () => string[],
}

const shell: Shell = {
  ls: () => {
    return Object.keys(files)
  },
  cat: (args: string[]) => {
    const content = files[args[0]] || "No such file found"
    return [content]
  },
  help: () => {
    return [
      "Available commands: ",
      "ls - list files",
      "cat - read a file"
    ]
  },
}

export function answer(command: string) {
  // split by whitespaces
  let all = command.trim().split(' ').filter(s => s.trim() !== "")
  let [cmd, ...args] = all
    // try to find command
    if(Object.keys(shell).includes(cmd)){
      // invoke command
      return (shell as any)[cmd](args)
    }
    else {
      return ["Command not found"]
    }
}