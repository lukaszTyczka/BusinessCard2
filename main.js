const experienceTag = document.querySelector('.business-card__experience--js');
calculateExperience();
setInterval(calculateExperience, 1000);

function calculateExperience() {
    const dayInseconds = 24 * 60 * 60;
    const hourInseconds = 60 * 60;
    const minuteInseconds = 60;
    let experienceLength = (new Date() - new Date(2017, 1, 05, 7)) / 1000;

    const days = Math.floor(experienceLength / dayInseconds);
    experienceLength -= days * dayInseconds;
    const hours = Math.floor(experienceLength / hourInseconds);
    experienceLength -= hours * hourInseconds;
    const minutes = Math.floor(experienceLength / minuteInseconds);
    experienceLength -= minutes * minuteInseconds;
    const seconds = Math.round(experienceLength);

    experienceTag.innerHTML = `Experience: <br> &nbsp"${days} days ${hours} hours ${minutes} minutes ${seconds} seconds"`;
}
