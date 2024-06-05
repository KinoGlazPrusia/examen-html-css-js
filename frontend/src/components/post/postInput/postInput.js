export default function postInput() {
    const wrapper = document.createElement('div')
    wrapper.classList.add('post-input-wrapper')

    const input = document.createElement('input')
    input.classList.add('post-input-content')
    input.name = 'content'
    input.type = 'text'
    input.placeholder = 'Cuéntame tu vida...'
    input.maxLength = 80

    wrapper.appendChild(input)

    return wrapper
}