const url = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=91"
const main = document.querySelector<HTMLBodyElement>("main")
const pokeBox = document.querySelector<HTMLDivElement>(".pokeBox")


type Pokemon = {
    name: string;
    sprites: {
        front_default: string;
    };
};

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((response) => response.json())
    .then((pikachu: Pokemon) => {
        pokeBox.innerHTML = `
    <p>"Hello!"</p>
    <img src="${pikachu.sprites.front_default}" alt="${pikachu.name}" />
    `;
    });
