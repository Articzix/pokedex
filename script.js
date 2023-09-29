function fetchPokemon() {
    const pokemonName = document.getElementById('search').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayPokemon(data);
        })
        .catch(error => {
            console.error("Erro ao buscar Pokémon:", error);
            alert("Pokémon não encontrado!");
        });
}

function displayPokemon(pokemon) {
    const pokemonDetails = document.getElementById('pokemonDetails');
    const htmlContent = `
        <h2>${pokemon.name}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <p>Altura: ${pokemon.height}</p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Tipo: ${pokemon.types.map(typeInfo => typeInfo.type.name).join(", ")}</p>
    `;

    pokemonDetails.innerHTML = htmlContent;
}
