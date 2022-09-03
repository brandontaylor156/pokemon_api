import React from 'react';

function App() {
  const [pokemon, setPokemon] = React.useState([])

  const displayPokemon = async () => {
    try {
      const data = await (await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')).json()
      setPokemon(data.results)
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div>
        <button onClick={displayPokemon}>Fetch Pokemon</button>
        <div>
            {pokemon.length > 0 && pokemon.map((poke, index)=>{
                return (<div key={index}>{poke.name}</div>)
            })}
        </div>
    </div>
  )
}

export default App;
