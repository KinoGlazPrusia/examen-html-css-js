export default function emojiSelector() {
    const wrapper = document.createElement('div')
    wrapper.classList.add('emoji-selector-wrapper')

    // Tabs de tipo
    const tabs = document.createElement('div')
    tabs.classList.add('emoji-selector-tabs')
    tabs.innerHTML = `
        <span class="emoji-tab face-emojis">&#128540;</span>
        <span class="emoji-tab transport-emojis">&#128640;</span>
        <span class="emoji-tab office-emojis">&#128187;</span>
        <span class="emoji-tab people-emojis">&#129492;</span>
        <span class="emoji-tab animal-emojis">&#128034;</span>
    `

    // Manejar los clicks sobre los tabs
    const faceTab = tabs.querySelector('.face-emojis')
    const transportTab = tabs.querySelector('.transport-emojis')
    const officeTab = tabs.querySelector('.office-emojis')
    const peopleTab = tabs.querySelector('.people-emojis')
    const animalTab = tabs.querySelector('.animal-emojis')

    const tabArray = [
        faceTab,
        transportTab,
        officeTab,
        peopleTab,
        animalTab
    ]

    // Separador 
    const separator = document.createElement('hr')

    // Contenedor de emojis
    const container = document.createElement('div')
    container.classList.add('emoji-selector-container')

    // Emojis del tipo
    const faceDataset = loadDataset(128512, 128567)
    const transportDataset = 
        loadDataset(128640, 128676)
        .concat(loadDataset(128677, 128714))
    const officeDataset = loadDataset(128186, 128397)
    const peopleDataset = 
        loadDataset(128110, 128131)
        .concat(loadDataset(128100, 128118))
        .concat(loadDataset(128146, 128159))
    const animalDataset = 
        loadDataset(128000, 128063)
        .concat(loadDataset(129408, 129442))

    const datasets = [
        faceDataset,
        transportDataset,
        officeDataset,
        peopleDataset,
        animalDataset
    ]

    // Añadimos los listeners
    tabArray.forEach((tab, index) => {
        tab.onclick = () => handleTabClick(tabArray, tab, container, datasets[index])
    })

    wrapper.appendChild(tabs)
    wrapper.appendChild(separator)
    wrapper.appendChild(container)

    return wrapper
}

function handleTabClick(tabArray, tab, container, dataset) {
    if (!tab.classList.contains('selected')) {
        // Eliminar la clase selected de todos los tabs y añadirla solo al seleccionado
        tabArray.forEach(tab => tab.classList.remove('selected'))
        tab.classList.add('selected')

        // Cargamos todos los emojis
        container.innerHTML = ''
        dataset.forEach(emoji => {
            const emojiButton = document.createElement('span')
            emojiButton.classList.add('emoji')
            emojiButton.innerHTML = emoji
            emojiButton.onclick = () => handleEmojiClick(emoji)
            container.appendChild(emojiButton)
        })
    } 
}

function handleEmojiClick(emoji){
    console.log(emoji)
    const postInput = document.querySelector('.post-input-content')
    postInput.value += emoji
}

function loadDataset(initialIndex, finalIndex) {
    const dataset = []
    for (let i = initialIndex; i <= finalIndex; i++) {
        dataset.push(`&#${i};`)
    }

    return dataset
}