const imageData = {
    image1: "This is information about Image 1.",
    image2: "This is information about Image 2.",
    image3: "This is information about Image 3.",
    image4: "This is information about Image 4.",
    image5: "This is information about Image 5.",
    image6: "This is information about Image 6."
};

const actors = {
    'Dwayne “The Rock” Johnson': 'Age: 52 years, Height: 196 cm, Occupation: Actor, Producer, Former Wrestler.',
    'Beyoncé': 'Age: 42 years, Height: 170 cm, Occupation: Singer, Actress, Producer.',
    'Leonardo DiCaprio': 'Age: 49 years, Height: 183 cm, Occupation: Actor, Producer, Environmental Activist.',
    'Angelina Jolie': 'Age: 49 years, Height: 169 cm, Occupation: Actress, Director, Humanitarian Activist.',
    'Timothée Chalamet': 'Age: 28 years, Height: 178 cm, Occupation: Actor.',
    'Chris Evans': 'Age: 43 years, Height: 183 cm, Occupation: Actor.'
};

document.querySelectorAll('.image-card').forEach(card => {
    card.addEventListener('click', () => showInfo(card.dataset.id, card.querySelector('p').textContent));
});

function showInfo(imageId, actorName) {
    window.location.hash = actorName;

    const infoContainer = document.getElementById("info-container");
    const infoContent = document.getElementById("info-content");
    infoContent.innerHTML = `<h2>${actorName}</h2><p>${actors[actorName]}</p><p>${imageData[imageId]}</p>`;
    infoContainer.style.display = "flex";
}

function closeInfo() {
    window.location.hash = '';
    
    document.getElementById("info-container").style.display = "none";
}
