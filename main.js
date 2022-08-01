const baseURL = 'https://pokeapi.co/api/v2';

const caja = document.getElementById('caja');
const pokemones = 56;

const fetchPokemones = async () => {
    for(let i = 1; i <= pokemones; i++){
        await getPokemon(i);
    }
};

const getPokemon = async (id) => {
    try {
        const response = await fetch(`${baseURL}/pokemon/${id}`);
        // console.log(response)
        const data = await response.json();
        // console.log(data)
        pintarPoke(data);
    } catch (error) {
        console.log(error)
        
    }

}
const pintarPoke = (pokemon) => {
    // console.log(pokemon)
    const div = document.createElement('div');
    const {id, name, sprites, height, weight, types} = pokemon;
    const pintarhtml = ` <div class="poke">
    <img src = "${sprites.front_default}" class="img-poke" />
    <h2>${name}</h2>
    <div class="tipo-poke">
    ${types.map((tipo) => {return `<span>${tipo.type.name}</span>`}).join(" | ")
    }
    </div>
    <p class="poke-id">#${id}</p>
    <p>Height: ${height}</p>
    <p>Weight: ${weight} kg</p>
    </div>
    `;
    div.innerHTML = pintarhtml;
    caja.appendChild(div)
};



fetchPokemones()