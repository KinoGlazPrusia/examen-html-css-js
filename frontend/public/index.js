import setPostForm from "../src/components/post/postForm/postForm.js"
import setPostCard from "../src/components/post/postCard/postCard.js"
import setSurveyCard from "../src/components/survey/surveyCard/surveyCard.js"

document.addEventListener("DOMContentLoaded", () => {
    /* LAYOUT */
    const container = document.querySelector('.container')

    /* COMPONENTS */
    const postForm = setPostForm()

    const surveyCard = setSurveyCard({
        title: '¿Que nota debería sacar Josep?',
        options: ['Excelente', 'Notable', 'Suficiente', 'Suspenso']
    })
    const postCard = setPostCard(surveyCard)

    /* ENSAMBLAJE */
    container.appendChild(postForm)
    container.appendChild(postCard)
})