// Bring in Toggle buttons(querySelectorAll)
// Loop through NodeList(forEach)
// Add click event(addEventListner)
// toggle the active class on the parent node (.parentNode & classList.toggle())
const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})