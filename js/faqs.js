
function updateFAQText() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        document.getElementById("faq-one").innerHTML = "Work better together";
        document.getElementById("faq-two").innerHTML = "OpenType features and Variable fonts";
        document.getElementById("faq-three").innerHTML = "Start working faster today";
        document.getElementById("faq-four").innerHTML = "Work at the speed of thought.";
        document.getElementById("faq-five").innerHTML = "The Fastest way to organize";
        document.getElementById("faq-sixth").innerHTML = "The Fastest way to navigate";
    }
}


updateFAQText();


window.addEventListener('resize', updateFAQText);
