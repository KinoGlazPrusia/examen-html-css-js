import setAvatar from "../../avatar/avatar.js"

export default function postCard(contentElement) {
    const wrapper = document.createElement('div')
    wrapper.classList.add('post-card-wrapper')

    // Avatar
    const avatar = setAvatar({
        img: 'https://i.pravatar.cc/150',
        name: 'Pepito',
        lastname: 'Martínez',
        username: 'pepitomartinez'
    })

    wrapper.appendChild(avatar)
    wrapper.appendChild(contentElement)

    return wrapper
}