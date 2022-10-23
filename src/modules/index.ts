interface module {
  install: Function
}
const modulesFiles: Record<string, module> = import.meta.glob('./*.ts', { eager: true })
const path = Object.keys(modulesFiles)
const modulesInstallFns: Function[] = []
path.forEach((item) => {
  modulesInstallFns.push(modulesFiles[item].install)
})
export default modulesInstallFns
