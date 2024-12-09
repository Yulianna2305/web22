async function fetchPokemonList() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const data = await response.json();
    displayPokemons(data.results);
}

async function displayPokemons(pokemonList) {
    const container = document.getElementById("pokemon-container");

    for (const pokemon of pokemonList) {
        const response = await fetch(pokemon.url);
        const data = await response.json();

        const card = document.createElement("div");
        card.className = "pokemon-card";
        card.innerHTML = `
            <h3>${data.name}</h3>
            <img src="${data.sprites.front_default}" alt="${data.name}">
        `;
        card.addEventListener("click", () => showDetails(data));
        container.appendChild(card);
    }
}

function showDetails(data) {
    const modal = document.getElementById("modal");
    const details = document.getElementById("pokemon-details");

    details.innerHTML = `
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p><b>Ім'я:</b> ${data.name}</p>
        <p><b>Вага:</b> ${data.weight}</p>
        <p><b>Зріст:</b> ${data.height}</p>
        <p><b>Типи:</b> ${data.types.map(t => t.type.name).join(", ")}</p>
        <p><b>Досвід:</b> ${data.base_experience}</p>
    `;
    modal.style.display = "block";
}

document.getElementById("close").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
});

window.addEventListener("click", (event) => {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

fetchPokemonList();
