import setAvatar from "../../avatar/avatar.js"
import setPostInput from "../postInput/postInput.js"
import setPostActions from "../postActions/postActions.js"
import setSurveyForm from "../../survey/surveyForm/surveyForm.js"

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
    console.log("Submit")
}