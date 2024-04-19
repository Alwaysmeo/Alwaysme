export default function (commandId, showUI, value) {
	if (!this?.isFocus?.()) this?.selection?.setSelection?.()
	document.execCommand(commandId, showUI, value)
}
