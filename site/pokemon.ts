const ul = document.querySelector<HTMLUListElement>(".pokemon")
const queryString = new URLSearchParams(window.location.search)


function addPokemonImage(response: PokemonEntry) {
    const div = document.querySelector<HTMLDivElement>(".abilitiesBox")
    const pokeTitleCase = `${response.name[0].toUpperCase()}${response.name.slice(1)}`
    div.innerHTML = `
        <figure>
            <img src="${response.sprites.front_shiny}" alt="${pokeTitleCase}" />
            <figcaption>${pokeTitleCase}</figcaption>
            <p>Abilities: ${response.abilities[0].ability.name}</p>
        </figure>
    `
    console.log(response.abilities[0].ability.name)
    ul.append(div)
}

function addPokemonAbility(response: PokemonEntry) {
    // const pokeTitleCase = `${response.abilities[0].toUpperCase()}${response.name.slice(1)}`
    const li = document.createElement("li")
    // const flavor_text = (pokemon.flavor_text_entries)
    //     .find(flavor_text_entry => flavor_text_entry.language.name === "en")
    li.innerHTML = ` 
    <span class="ability-name">${response.abilities[0].name} - </span>
    <span class="ability-short-description">${response.abilities[0].ability}</span>
    <p>Hello</p>
`
    ul.append(li)

}


type PokemonEntry = {
    sprites: { front_shiny: string };
    name: string;
    abilities: [ability: {
        name: string;
        ability: string;
    }]
}

fetch(`https://pokeapi.co/api/v2/pokemon/${queryString.get("pokemon")}`)
    .then((response) => response.json())
    .then((response: PokemonEntry) => {
        console.log("hello")
        const abilitiesRequests = response.abilities
            .map(ability => ability.ability)
            .map(urlInd => {
                return fetch(urlInd).then(response => response.json())
            })
        addPokemonImage(response)
        return Promise.all(abilitiesRequests)
    }).then(response => {
        response.map(response => {
            const li = document.createElement("li")
            li.innerHTML = `
            <span class="ability-name">
            ${response.name[0].toUpperCase()}${response.name.slice(1)}
        </span>
        <span class="ability-short-description">
            ${response.abilities.ability}
        </span>
        `
            return li
        }).forEach(li => {
            ul.append(li)
        })
    })


/*

Promise.all(abilitiesRequests).then(abilities => {
console.log("hello fred")
abilities.forEach(ability => {
    addPokemonAbility(ability)
})
})
}).catch(error => {
console.error(error.message)
})

*/
export default {}