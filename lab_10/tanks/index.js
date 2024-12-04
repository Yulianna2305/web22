const imageData = {
    image1: "This is information about Image 1.",
    image2: "This is information about Image 2.",
    image3: "This is information about Image 3.",
    image4: "This is information about Image 4.",
    image5: "This is information about Image 5.",
    image6: "This is information about Image 6."
};

document.querySelectorAll('.image-card').forEach(card => {
    card.addEventListener('click', () => showInfo(card.dataset.id));
});

function showInfo(imageId) {
    const infoContainer = document.getElementById("info-container");
    const infoContent = document.getElementById("info-content");

    infoContent.innerHTML = `<h2>${imageId}</h2><p>${imageData[imageId]}</p>`;
    infoContainer.style.display = "flex";
}

function closeInfo() {
    document.getElementById("info-container").style.display = "none";
}
