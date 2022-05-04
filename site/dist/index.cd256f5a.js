const url = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=91";
const main = document.querySelector("main");
const pokeBox = document.querySelector(".pokeBox");
const ul = document.querySelector("ul");
fetch(url).then((response)=>response.json()
).then((response1)=>{
    const pokeBall = response1.results;
    const httpReq = pokeBall.map((pokemon)=>pokemon.url
    ).map((url1)=>{
        return fetch(url1).then((response)=>response.json()
        );
    });
    return Promise.all(httpReq);
// Safe
}).then((responses)=>{
    responses.map((response)=>{
        const pokemonList = document.createElement("div");
        const name = `${response.species.name[0].toUpperCase()}${response.species.name.slice(1)}`;
        pokemonList.innerHTML = `
                 <figure>
                    <img src ="${response.sprites.front_shiny}" alt="${name}" />
                    <figcaption>
                        <a href="pokemon.html?pokemon=${response.id}">
                        ${name}
                        </a>
                    </figcaption
                 </figure>
                `;
        return pokemonList;
    }).forEach((pokemonList)=>{
        ul.append(pokemonList);
    });
}).catch((error)=>{
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error(message);
});

//# sourceMappingURL=index.cd256f5a.js.map
