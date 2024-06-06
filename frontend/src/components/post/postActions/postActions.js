import setEmojiSelector from "../../emoji/emojiSelector/emojiSelector.js"

export default function postActions() {
    const wrapper = document.createElement('div')
    wrapper.classList.add('post-action-wrapper')

    const icons = document.createElement('div')
    icons.classList.add('post-action-icons')
    icons.innerHTML = `
        <span class="image-icon material-symbols-outlined disabled">imagesmode</span>
        <span class="gif-icon material-symbols-outlined disabled">gif_box</span>
        <span class="survey-icon material-symbols-outlined">format_list_bulleted</span>
        <span class="emoji-icon material-symbols-outlined">sentiment_very_satisfied</span>
        <span class="calendar-icon material-symbols-outlined disabled">calendar_month</span>
        <span class="location-icon material-symbols-outlined disabled">location_on</span>
    `

    // Abrir el modal de emojis
    const emojiAction = icons.querySelector('.emoji-icon')
    emojiAction.onclick = () => emojiHandleOnClick(wrapper, emojiAction)

    // Abrir la encuesta
    const surveyAction = icons.querySelector('.survey-icon')
    surveyAction.onclick = () => surveyHandleOnClick(surveyAction)

    // Submit
    const submit = document.createElement('button')
    submit.classList.add('post-action-submit')
    submit.textContent = 'Post'

    wrapper.appendChild(icons)
    wrapper.appendChild(submit)

    return wrapper
}

function emojiHandleOnClick(wrapper, icon) {
    if (icon.classList.contains('active')) {
        icon.classList.remove('active')
        wrapper.removeChild(wrapper.lastChild)
    } else {
        icon.classList.add('active')
        const emojiModal = setEmojiSelector()
        wrapper.appendChild(emojiModal)
    }
}

function surveyHandleOnClick(icon) {
    const survey = document.querySelector('.survey-form-wrapper')
    survey.style.display = survey.style.display === 'grid' 
        ? 'none'
        : 'grid'

    icon.classList.contains('active') 
        ? icon.classList.remove('active')
        : icon.classList.add('active')
}