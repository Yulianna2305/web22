const imageData = {
    image1: "This is information about Image 1.",
    image2: "This is information about Image 2.",
    image3: "This is information about Image 3.",
    image4: "This is information about Image 4.",
    image5: "This is information about Image 5.",
    image6: "This is information about Image 6."
};

const actors = {
    'Dwayne “The Rock” Johnson': 'Вік: 52 роки (народився 2 травня 1972 року). Ріст: 196 см. Рід діяльності: Актор, продюсер, колишній реслер.',
    'Beyoncé': 'Вік: 42 роки (народилася 4 вересня 1981 року). Ріст: 170 см. Рід діяльності: Співачка, акторка, продюсерка.',
    'Leonardo DiCaprio': 'Вік: 49 років (народився 11 листопада 1974 року).Ріст: 183 см. Рід діяльності: Актор, продюсер, екоактивіст.',
    'Angelina Jolie': 'Вік: 49 років (народилася 4 червня 1975 року).Ріст: 169 см. Рід діяльності: Акторка, режисерка, гуманітарна активістка.',
    'Timothée Chalamet': 'Вік: 28 років (народився 27 грудня 1995 року). Ріст: 178 см. Рід діяльності: Актор.',
    'Chris Evans': 'Вік: 43 роки (народився 13 червня 1981 року). Ріст: 183 см. Рід діяльності: Актор.'
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
