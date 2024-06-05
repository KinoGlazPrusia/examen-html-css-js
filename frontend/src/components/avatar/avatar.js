export default function avatar(user) {
    const wrapper = document.createElement('div')
    wrapper.classList.add('avatar-wrapper')

    // Image
    const img = document.createElement('img')
    img.classList.add('avatar-img')
    img.src = user.img

    // Name
    const name = document.createElement('span')
    name.classList.add('avatar-name')
    name.textContent = `${user.name} ${user.lastname}`

    // Username
    const username = document.createElement('span')
    username.classList.add('avatar-username')
    username.textContent = `@${user.username}`

    wrapper.appendChild(img)
    wrapper.appendChild(name)
    wrapper.appendChild(username)

    return wrapper
}