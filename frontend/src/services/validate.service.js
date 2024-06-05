export function validateInput(input, params) {
    let validityMessage = []

    params.forEach(param => {
        if (!param.condition()) {
            validityMessage.push(param.message)
        }
    })

    if (validityMessage.length > 0) {
        input.setCustomValidity(validityMessage.join('\n'))
        input.classList.remove('valid')
        input.classList.add('invalid')
    } else {
        input.setCustomValidity('')
        input.classList.remove('invalid')
        input.classList.add('valid')
    }

    input.reportValidity()
}