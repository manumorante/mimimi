function Mimificator() {
  let inputText = ''
  let outputText = ''
  const textarea = document.querySelector('.js-textarea')
  const output = document.querySelector('.js-output')
  const btnAction = document.querySelector('.js-btn-action')

  if(!textarea || !output || !btnAction) return false

  function mimify(stringParam) {
    let t = stringParam || ''
    t = t.toLowerCase()
    t = t.replace(/qu/g, 'k')
    t = t.replace(/ca|co|cu/g, 'ki')
    t = t.replace(/[aeiou]/g, 'i')
    t = t.replace(/[áéíóú]/g, 'í')
    return t
  }

  function execute() {
    inputText = textarea.value
    outputText = mimify(inputText)
    output.innerHTML = outputText
  }

  // Events
  btnAction.addEventListener('click', () => execute())
  textarea.addEventListener('keyup', () => {execute()})
  textarea.addEventListener('change', () => {execute()})

  execute()

  new Clipboard('.js-copy')
}

window.onload = function() {
  Mimificator()
}