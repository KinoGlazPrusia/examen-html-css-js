export default function surveyCard(survey) {
    const wrapper = document.createElement('div')
    wrapper.classList.add('survey-card-wrapper')

    // Título
    const title = document.createElement('span')
    title.classList.add('survey-card-title')
    title.textContent = survey.title

    // Opciones
    const optionWrapper = document.createElement('div')
    optionWrapper.classList.add('survey-card-option-wrapper')

    // Votos
    const votes = document.createElement('span')
    votes.classList.add('survey-card-votes')
    votes.textContent = '0 votes'

    wrapper.appendChild(title)
    wrapper.appendChild(optionWrapper)
    wrapper.appendChild(votes)

    // Agregamos las opciones
    survey.options.forEach(option => addOption(optionWrapper, option))

    return wrapper
}

function addOption(wrapper, labelValue) {
    // Wrapper de la opción
    const option = document.createElement('div')
    option.classList.add('survey-card-option')

    // Label
    const label = document.createElement('span')
    label.classList.add('survey-card-option-label')
    label.textContent = labelValue

    // Porcentaje
    const percentage = document.createElement('span')
    percentage.classList.add('survey-card-option-percentage')
    percentage.textContent = '0%'

    // Barra de porcentaje
    const bar = document.createElement('div')
    bar.classList.add('survey-card-option-bar')

    // Votos (ocultos) (aquí guardamos los datos de manera temporal como un estado)
    const votes = document.createElement('span')
    votes.classList.add('survey-card-option-votes')
    votes.textContent = '0'
    votes.style.display = 'none'

    option.onclick = () => handleVote(wrapper, option)

    option.appendChild(label)
    option.appendChild(percentage)
    option.appendChild(bar)
    option.appendChild(votes)

    wrapper.appendChild(option)
}

function handleVote(wrapper, option) {
    // Recuperamos el objeto que contiene el total de votos y los votos de la opción clicada
    const totalVotes = wrapper.parentNode.querySelector('.survey-card-votes')
    const optionVotes = option.querySelector('.survey-card-option-votes')

    // Lo actualizamos sumando 1
    totalVotes.textContent = `${Number(totalVotes.textContent.split(' ')[0]) + 1} votes`
    optionVotes.textContent = `${Number(optionVotes.textContent.split(' ')[0]) + 1}`

    // Recorremos todas las opciones y las actualizamos
    const options = wrapper.parentNode.querySelectorAll('.survey-card-option')
    let mostVoted = {option: option, votes: Number(optionVotes.textContent.split(' ')[0])}

    options.forEach(option => {
        option.classList.remove('most-voted')
        
        const optionVotes = option.querySelector('.survey-card-option-votes')
        const percentage = option.querySelector('.survey-card-option-percentage')
        const bar = option.querySelector('.survey-card-option-bar')

        const optionPercentage = Math.round(Number(optionVotes.textContent.split(' ')[0]) / Number(totalVotes.textContent.split(' ')[0]) * 100)
        percentage.textContent = `${optionPercentage}%`

        bar.style.transform = `translateX(-${100 -optionPercentage}%)`

        if (Number(optionVotes.textContent.split(' ')[0]) > mostVoted.votes) {
            mostVoted = {option: option, votes: Number(optionVotes.textContent.split(' ')[0])}
        }
    })

    mostVoted.option.classList.add('most-voted')
}