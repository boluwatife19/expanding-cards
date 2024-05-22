let images = document.querySelectorAll(".img")

images.forEach(image => {
    image.addEventListener("click", () => {
        removeWidth()
        image.classList.add('active');
    })
});

function removeWidth() {
    images.forEach(image => {
        image.classList.remove('active')
    });
}