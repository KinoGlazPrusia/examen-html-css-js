import setSurveyOption from "../surveyOption/surveyOption.js"

export default function surveyForm() {
    const wrapper = document.createElement('div')
    wrapper.classList.add('survey-form-wrapper')

    // Title
    const title = document.createElement('input')
    title.classList.add('survey-title')
    title.placeholder = 'Título de la encuesta'

    wrapper.appendChild(title)

    // Initial option
    addOption(wrapper, 'Opción 1')

    return wrapper
}

function addOption(wrapper, label, isLast=false) {
    const option = setSurveyOption(label)
    wrapper.appendChild(option)

    // Add option button
    if (!isLast) {
        const add = document.createElement('button')
        add.classList.add('survey-form-add-button')
        add.innerHTML = `<span class="add-icon material-symbols-outlined">add</span>`
        add.onclick = () => handleClick(wrapper)
        wrapper.appendChild(add)
    }
}

function handleClick(wrapper) {
    // Chequear cuántas opciones hay
    const options = wrapper.querySelectorAll('.survey-form-add-button')
    const lastOption = options[options.length - 1]
    lastOption.classList.add('add-disabled')

    // Generar el nombre del label en base al número de opciones
    let label;
    if(options.length < 2) {
        label = `Opción ${options.length + 1}`
    } else {
        label = `Opción ${options.length + 1} (opcional)`
    }

    if (options.length === 3) {
        addOption(wrapper, label, true)
    } else if (options.length < 3) {
        addOption(wrapper, label)

    }
}

function validate() {

}