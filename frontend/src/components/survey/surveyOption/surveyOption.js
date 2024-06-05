export default function surveyOption(labelValue) {
    const wrapper = document.createElement('div')
    wrapper.classList.add('survey-option-wrapper')

    const input = document.createElement('input')
    input.classList.add('survey-option-input')
    input.maxLength = 25

    // Contador de caracteres
    const counter = document.createElement('span')
    counter.classList.add('survey-option-counter')
    counter.textContent = '0/25'

    // Label
    const label = document.createElement('span')
    label.classList.add('survey-option-label')
    label.textContent = labelValue

    input.oninput = () => handleInput(input, counter)

    wrapper.appendChild(input)
    wrapper.appendChild(counter)
    wrapper.appendChild(label)

    return wrapper
}

function handleInput(input, counter) {
    counter.textContent = `${input.value.length}/25`
}