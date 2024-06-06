import setPostForm from "../src/components/post/postForm/postForm.js"
import setPostCard from "../src/components/post/postCard/postCard.js"
import setSurveyCard from "../src/components/survey/surveyCard/surveyCard.js"
import setThemeToogle from "../src/components/control/themeToogle/themeToogle.js"

document.addEventListener("DOMContentLoaded", () => {
    /* LAYOUT */
    const container = document.querySelector('.container')

    /* COMPONENTS */
    const themeToogle = setThemeToogle()
    const postForm = setPostForm()

    const surveyCard = setSurveyCard({
        title: '¿Que nota debería sacar Josep?',
        options: ['Excelente', 'Notable', 'Suficiente', 'Suspenso']
    })
    const postCard = setPostCard(surveyCard)

    /* ENSAMBLAJE */
    container.appendChild(themeToogle)
    container.appendChild(postForm)
    container.appendChild(postCard)

    /* LISTENERS DE LA PÁGINA */
    document.onclick = (e) => {
        closeEmojiModal(e)
    }
})

function closeEmojiModal(e) {
    const emojiModal = document.querySelector('.emoji-selector-wrapper')

    if (!emojiModal) return

    if (!e.target.classList[0].includes('emoji')) {
        const wrapper = emojiModal.parentNode
        const button = wrapper.querySelector('.emoji-icon')
        button.classList.remove('active')
        wrapper.removeChild(emojiModal)
    }
}