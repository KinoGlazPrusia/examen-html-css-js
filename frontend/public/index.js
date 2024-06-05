import setPostForm from "../src/components/post/postForm/postForm.js"

document.addEventListener("DOMContentLoaded", () => {
    /* LAYOUT */
    const container = document.querySelector('.container')

    /* COMPONENTS */
    const postForm = setPostForm()

    /* ENSAMBLAJE */
    container.appendChild(postForm)
})