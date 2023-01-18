const pokeContainer = document.getElementById('poke-container');
const pokeCount = 200;

const fetchpokemon = async ()=>{
    for (let i = 1; i <= pokeCount ; i++) {
        await pokedata(i);
    }
}

const pokedata = async (id)=>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    creatpokemoncard(data);
}

const creatpokemoncard = (pokemondata)=>{
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    const pokemontype = pokemondata.types.map(type => type.type.name);
    console.log(pokemontype)
    const InnerPokemonHtml = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemondata.id}.png" alt="" srcset="">
    </div>
    <div class="poke-info">
        <span class="pokenumber">
            #${pokemondata.id}
        </span>
        <h3 class="pokename">
            ${pokemondata.name}
        </h3>
        <small class="poke-type">
            <span>
                ${pokemontype[0]}
            </span>
        </small>
    </div>
    `
    pokemonEl.innerHTML = InnerPokemonHtml;
    pokeContainer.appendChild(pokemonEl);
}
fetchpokemon();