const pokeDetail = document.querySelector(".pokemon");
const urlInd = new URL(window.location.search);
function addPokemonImage(response) {
    const div = document.querySelector(".abilitiesBox");
    const pokeTitleCase = `${response.name[0].toUpperCase()}${response.name.slice(1)}`;
    div.innerHTML = `
        <figure>
            <img src="${response.sprites.front_shiny}" alt="${pokeTitleCase}" />
            <figcaption>${pokeTitleCase}</figcaption>
            <a>Abilities</a>
        </figure>
    `;
    ul.append(div);
}
function addPokemonAbility(response) {
    // const pokeTitleCase = `${response.abilities[0].toUpperCase()}${response.name.slice(1)}`
    const li = document.createElement("li");
    // const flavor_text = (pokemon.flavor_text_entries)
    //     .find(flavor_text_entry => flavor_text_entry.language.name === "en")
    li.innerHTML = ` 
    <span class="ability-name">${response.abilities[0].name} - </span>
    <span class="ability-short-description">${response.abilities[0].ability}</span>
`;
    ul.append(li);
}
const queryString = new URLSearchParams(window.location.search);
fetch(`https://pokeapi.co/api/v2/pokemon/${queryString.get("pokemon")}`).then((response)=>response.json()
).then((response1)=>{
    console.log("hello");
    const abilitiesRequests = response1.abilities.map((ability)=>ability.ability
    ).map((urlInd1)=>{
        return fetch(urlInd1).then((response)=>response.json()
        );
    });
    addPokemonImage(response1);
    Promise.all(abilitiesRequests).then((abilities)=>{
        abilities.forEach((ability)=>{
            addPokemonAbility(ability);
        });
    });
}).catch((error)=>{
    console.error(error.message);
}) // const queryString = new URLSearchParams(window.location.search)
 // fetch(`https://pokeapi.co/api/v2/pokemon/${queryString.get("pokemon")}`)
 //     .then(response => {
 //         return response.json()
 //     }).then(pokemon => {
 //         const abilitiesRequests = pokemon.abilities
 //             .map(ability => ability.ability.url)
 //             .map(url => {
 //                 return fetch(url).then(response => response.json())
 //             })
 //         addPokemonImage(pokemon)
 //         Promise.all(abilitiesRequests).then(abilities => {
 //             abilities.forEach(ability => {
 //                 addPokemonAbility(ability)
 //                 loading.classList.add("hidden")
 //             })
 //         })
 //     }).catch(error => {
 //         console.error(error.message)
 //     })
;

//# sourceMappingURL=pokemon.a4c2f541.js.map
