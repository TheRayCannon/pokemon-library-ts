const url = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=91";
const main = document.querySelector("main");
const pokeBox = document.querySelector(".pokeBox");
const $app = document.querySelector("#app");
fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then((response)=>response.json()
).then((pikachu)=>{
    $app.innerHTML = `
        
    <img src="${pikachu.sprites.front_default}" alt="${pikachu.name}" />
    `;
});

//# sourceMappingURL=index.cd256f5a.js.map
