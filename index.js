document.addEventListener('DOMContentLoaded', () => {
    const ratingSection = document.getElementById('rating-section');
    const ratingBtn = document.querySelectorAll('.rating-btn');
    const thankYouSection = document.getElementById('thank-you-section');
    const resultBox = document.getElementById('result-box');
    const ratingValue = document.getElementById('rating-value');
    const submit = document.getElementById('submit');


    let selectRating = null;


    for (let button of ratingBtn) {
        button.addEventListener('click', () => {

            ratingBtn.forEach(btn => btn.classList.remove("active"));
            selectRating = button.getAttribute("data-rate");
            button.classList.add("active");
        })
    }


    submit.addEventListener('click', () => {
        ratingSection.style.display = "none";
        if (selectRating) {
            ratingValue.innerHTML = `You selected ${selectRating} out of 5`;
            thankYouSection.style.display = 'flex'

        }

        else {
            window.alert('Select a rating');
            ratingSection.style.display = 'flex'
        }
    })
});




















