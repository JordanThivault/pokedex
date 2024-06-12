

// function NavBar ({prevPokemon, nextPokemon}) {
//     return (
//     <div> 
//     <button onClick={prevPokemon}>Précédent</button>
//     <button onClick={nextPokemon}>Suivant</button>
//     </div> 
//      )      
// }

function NavBar ({pokemonList, setPokemonIndex}) {
    return (
    <div> 
        {pokemonList.map((pokemon, index)=>(
            <button key={pokemon.name} onClick={() => setPokemonIndex(index)}>
                {pokemon.name}
            </button>
        ))}
    </div> 
     )      
}

export default NavBar;