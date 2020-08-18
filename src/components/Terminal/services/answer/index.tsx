const files: any = {
  "cv": "Full-stack JavaScript engineer. Specialized in Node and React / React Native. BSc CompSci (Innsbruck & Hong Kong)\n",
  "me": "🏋️‍♂️ 🏊‍♂️ 🗻 🛫 🍹",
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