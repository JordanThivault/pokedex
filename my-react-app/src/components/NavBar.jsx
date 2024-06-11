

function NavBar ({prevPokemon, nextPokemon}) {
    return (
    <div> 
    <button onClick={prevPokemon}>Précédent</button>
    <button onClick={nextPokemon}>Suivant</button>
    </div> 
     )      
}

export default NavBar;