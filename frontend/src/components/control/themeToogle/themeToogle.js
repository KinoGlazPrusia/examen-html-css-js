export default function themeToogle() {
    const wrapper = document.createElement('div')
    wrapper.classList.add('theme-toogle-wrapper')

    const icons = document.createElement('div')
    icons.classList.add('theme-toogle-icons')
    icons.innerHTML = `
        <span class="light-icon material-symbols-outlined">light_mode</span>
        <span class="dark-icon material-symbols-outlined">dark_mode</span>
    `

    const button = document.createElement('div')
    button.classList.add('theme-toogle-button')

    button.onclick = () => handleClick(button)

    icons.appendChild(button)
    wrapper.appendChild(icons)

    return wrapper
}

function handleClick(button) {
    const container = document.querySelector('.container')

    if ( container.classList.contains('theme-light')) {
        button.style.right = 'calc(100% - 24px)'
        container.classList.replace('theme-light', 'theme-dark')
        document.body.classList.replace('theme-light', 'theme-dark')
    } else {
        button.style.right = '0%'
        container.classList.replace('theme-dark', 'theme-light')
        document.body.classList.replace('theme-dark', 'theme-light')
    }
}