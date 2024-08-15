const images = document.querySelectorAll('.collection-bg');
const sliderButtonsContainer = document.querySelector('.slider-buttons');
let currentIndex = 0;

// Function to create slider buttons
function createSliderButtons() {
    sliderButtonsContainer.innerHTML = '';
    images.forEach((_, index) => {
        const button = document.createElement('button');
        button.classList.add('slider-btn');
        if (index === 0) button.classList.add('active');
        button.dataset.index = index;
        sliderButtonsContainer.appendChild(button);
    });
}

function updateSlider(index) {
    images.forEach((img, i) => img.classList.toggle('active', i === index));
    document.querySelectorAll('.slider-btn').forEach((btn, i) => btn.classList.toggle('active', i === index));
    currentIndex = index;
}

document.getElementById('next').addEventListener('click', () => {
    updateSlider((currentIndex + 1) % images.length);
});

document.getElementById('prev').addEventListener('click', () => {
    updateSlider((currentIndex - 1 + images.length) % images.length);
});

sliderButtonsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('slider-btn')) {
        updateSlider(Number(event.target.dataset.index));
    }
});

createSliderButtons();


const mobileMenuIcon = document.getElementById("mobile-menu-icon");
const list = document.getElementById("list");


mobileMenuIcon.addEventListener("click", function() {

    list.classList.toggle("active-menu")
})
