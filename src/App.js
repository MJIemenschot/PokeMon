import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import PokemonCard from "./PokemonCard";
import pokemon_logo from "./assets/International_Pokémon_logo.svg"

function App() {
    const [pokenames, setPokenames] = useState(null);
    useEffect(() => {
        console.log('fetch names here');

        async function fetchNames(){
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
            console.log("de hek",response.data.results);
            setPokenames(response.data.results);
        };
        fetchNames();


    }, [])


  return (
      <div className='container'>
          <img className="logo" src={pokemon_logo} alt="pokemon logo"/>
          {pokenames ? (
           <div className="page">
               {pokenames.map(pokemon => {
                   return < PokemonCard nameOfPokemon={pokemon.name} />
               })}
          </div>
          ) : (
              <h3>Loading</h3>
          )}
      </div>
  );
}

export default App;
