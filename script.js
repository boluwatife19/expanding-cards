let images = document.querySelectorAll(".img")
let i = 1;
window.onload = images[0].classList.add("active");

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
