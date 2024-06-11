

// function PokemonCard() {
//     return (
//         <figure className="card">
//             <img 
//             src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" 
//             alt="bulbasaur"
//             className="card-img"
//             />
//         <figcaption>Bulbasaur</figcaption>
//         </figure>
//     );
// }

// const card = {
//     width: "200px",
//     padding: "1rem",
//     backgroundColor: "lightsalmon",
//     borderRadius: "5px",
//     boxShadow: "0px 0px 5px gray",
//     color: "white",
//     fontSize: "1.6rem",
//     textAlign: "center",
//     textShadow: "0px 0px 5px gray",
//   };
  
  // function PokemonCard() {
  //   return (
  //     <figure style={card}>
  //       <img
  //         src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
  //         alt="charmander"
  //         style={{
  //           width: "100%",
  //           height: "auto",
  //           marginBottom: "0.5rem",
  //           backgroundColor: "white",
  //           borderRadius: "inherit",
  //           boxShadow: "inherit",
  //         }}
  //       />
  //       <figcaption>charmander</figcaption>
  //     </figure>
  //   );
  // }

import styles from './PokemonCard.module.css'

function PokemonCard({pokemon}) {
  return (
    <figure className={styles.card}>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} 
        alt={pokemon.name} 
        className={styles.cardImg}/>
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}


export default PokemonCard;