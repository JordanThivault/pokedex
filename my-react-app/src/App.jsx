import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'


function App() {

  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

    const [pokemonIndex, setPokemonIndex] = useState(0);

    const prevPokemon = () => {
      setPokemonIndex((prevIndex) => (prevIndex === 0 ? pokemonList.length - 1 : prevIndex - 1));
    }
    
    const nextPokemon = () => {
      setPokemonIndex((prevIndex) => (prevIndex === pokemonList.length - 1 ? 0 : prevIndex + 1));
    };

  return (
    <>
      <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <button onClick={prevPokemon}>Précédent</button>
      <button onClick={nextPokemon}>Suivant</button>
      </div>
      
    </>
  )
}



export default App
