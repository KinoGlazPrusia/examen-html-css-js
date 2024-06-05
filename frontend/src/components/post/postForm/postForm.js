import setAvatar from "../../avatar/avatar.js"
import setPostInput from "../postInput/postInput.js"
import setPostActions from "../postActions/postActions.js"
import setSurveyForm from "../../survey/surveyForm/surveyForm.js"
import { resetOptions as resetSurveyForm } from "../../survey/surveyForm/surveyForm.js"
import setSurveyCard from "../../survey/surveyCard/surveyCard.js"
import setPostCard from "../postCard/postCard.js"

import validate from "../../../services/validate.service.js"

export default function postForm() {
    const wrapper = document.createElement('div')
    wrapper.classList.add('post-form-wrapper')

    // Avatar
    // Estos datos se recogerían de una llamada a la API o un contexto global
    const avatar = setAvatar({
        img: 'https://avatar.iran.liara.run/public',
        name: 'Pepito',
        lastname: 'Martínez',
        username: 'pepitomartinez'
    })

    // Input
    const input = setPostInput()

    // Actions
    const actions = setPostActions()

    // Survey
    const survey = setSurveyForm()

    // Submit
    const submit = actions.querySelector('.post-action-submit')
    submit.onclick = () => handleSubmit()

    wrapper.appendChild(avatar)
    wrapper.appendChild(input)
    wrapper.appendChild(actions)
    wrapper.appendChild(survey)

    return wrapper
}

function handleSubmit() {
    let validity = true

    // Validamos todos los campos: título, opciones y cantidad
    const title = document.querySelector('.survey-title')
    const options = document.querySelectorAll('.survey-option-input')

    // Las opciones obligatorias no pueden estar vacías y deben tener menos de 25 caracteres
    Array.from(options).slice(0,2).reverse().forEach(option => {
        validate(option, [
            {
                condition: () => option.value.length > 0,
                message: 'Las opciones obligatorias no pueden estar vacías'
            },
            {
                condition: () => option.value.length <= 25,
                message: 'La opción debe tener menos de 25 caracteres'
            }
        ])

        if (!option.validity.valid) validity = false
    })

    // El título no puede estar vacío y debe tener menos de 25 caracteres
    validate(title, [
        {
            condition: () => title.value.length > 0,
            message: 'El título no puede estar vacío'
        },
        {
            condition: () => title.value.length <= 25,
            message: 'El título debe tener menos de 25 caracteres'
        }
    ])

    if (!title.validity.valid) validity = false

    // Revisar que haya almenos 2 opciones
    const alert = document.querySelector('.survey-alert')
    if (options.length < 2) {
        alert.style.display = 'inline'
        validity = false
    } else {
        alert.style.display = 'none'
    }

    if (!validity) return

    appendSurvey(document.querySelector('.container'), {
        title: title.value,
        options: Array.from(options).map(option => option.value)
    })

    resetSurveyForm(document.querySelector('.survey-form-wrapper'))
}

function appendSurvey(wrapper, survey) {
    // Si hubiera backend lo gestionaríamos de manera optimista
    const surveyCard = setSurveyCard(survey)
    const postCard = setPostCard(surveyCard)

    wrapper.appendChild(postCard)
}