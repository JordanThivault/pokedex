

// function NavBar ({prevPokemon, nextPokemon}) {
//     return (
//     <div> 
//     <button onClick={prevPokemon}>Précédent</button>
//     <button onClick={nextPokemon}>Suivant</button>
//     </div> 
//      )      
// }

function NavBar ({pokemonList, setPokemonIndex}) {
    const handleClick = (pokemon, index) => {
        setPokemonIndex(index);
    if (pokemon.name === 'pikachu') {
        alert("pika pikachu !!!");
    }
    };

    return (
    <div> 
        {pokemonList.map((pokemon, index)=>(
            <button key={pokemon.name} onClick={() => handleClick(pokemon, index)}>
                {pokemon.name}
            </button>
        ))}
    </div> 
     )      
}

export default NavBar;