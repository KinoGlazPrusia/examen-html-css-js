import setSurveyOption from "../surveyOption/surveyOption.js"

export default function surveyForm() {
    const wrapper = document.createElement('div')
    wrapper.classList.add('survey-form-wrapper')

    // Título
    const title = document.createElement('input')
    title.classList.add('survey-title')
    title.placeholder = 'Título de la encuesta'

    wrapper.appendChild(title)

    // Selector de emojis para el título
    /* const emoji = document.createElement('span')
    emoji.classList = 'survey-title-emoji material-symbols-outlined'
    emoji.textContent = 'sentiment_very_satisfied'

    wrapper.appendChild(emoji) */

    // Alerta
    const alert = document.createElement('span')
    alert.classList.add('survey-alert')
    alert.textContent = '*La encuesta necesita un mínimo de 2 opciones y un título'

    wrapper.appendChild(alert)

    // Opción por defecto
    addOption(wrapper, 'Opción 1')

    return wrapper
}

function handleClick(wrapper, button) {
    // Deshabilitamos el botón de agregar
    button.disabled = true

    // Chequear cuántas opciones hay
    const options = wrapper.querySelectorAll('.survey-form-add-button')
    const lastOption = options[options.length - 1]

    // Generar el nombre del label en base al número de opciones
    let label;
    if(options.length < 2) {
        label = `Opción ${options.length + 1}`
    } else {
        label = `Opción ${options.length + 1} (opcional)`
    }

    if (options.length === 3) {
        addOption(wrapper, label, true)
        lastOption.classList.add('add-disabled')

    } else if (options.length < 3) {
        addOption(wrapper, label)
        lastOption.classList.add('add-disabled')

    } else {
        resetOptions(wrapper)
    }
}

function addOption(wrapper, label, isLast=false) {
    const option = setSurveyOption(label)

    const add = document.createElement('button')
    add.classList.add('survey-form-add-button')
    add.innerHTML = `<span class="add-icon material-symbols-outlined">${isLast ? 'restart_alt' : 'add'}</span>`
    add.onclick = () => handleClick(wrapper, add)

    wrapper.appendChild(option)
    wrapper.appendChild(add)
}

export function resetOptions(wrapper) {
    // Recogemos todas las opciones y todos los botones de agregar 
    const title = wrapper.querySelector('.survey-title')
    const options = wrapper.querySelectorAll('.survey-option-wrapper')
    const addButtons = wrapper.querySelectorAll('.survey-form-add-button')
    const defaultOption = options[0]
    const defaultOptionAddButton = addButtons[0]
    const alert = wrapper.querySelector('.survey-alert')

    // Eliminamos todas las opciones y botones de agregar exceptuando el primero
    for(let i = 1; i < options.length; i++) {
        wrapper.removeChild(options[i])
        wrapper.removeChild(addButtons[i])
    }

    // Rehabilitamos el botón de agregar de la opción por defecto
    defaultOptionAddButton.classList.remove('add-disabled')
    defaultOptionAddButton.disabled = false

    // Quitamos las clases referentes a la validación
    title.classList.remove('valid')
    title.classList.remove('invalid')

    defaultOption.querySelector('.survey-option-input').classList.remove('valid')
    defaultOption.querySelector('.survey-option-input').classList.remove('invalid')

    alert.style.display = 'none'
    
    // Limpiamos los 'values' de los inputs
    title.value = ''
    defaultOption.querySelector('.survey-option-input').value = ''
    defaultOption.querySelector('.survey-option-counter').textContent = '0/25'
}