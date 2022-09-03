import React from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = React.useState([])
  const [buttonClicked, setButtonClicked] = React.useState(false);

  React.useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then(response=>{setPokemon(response.data.results)})
    }, []); 

  const handleToggle = () => {
    setButtonClicked(!buttonClicked);
  }

  return (
    <div>
        <button onClick={handleToggle}>Fetch Pokemon</button>
        <div>
            {buttonClicked && pokemon.map((poke, index)=>{
                return (<div key={index}>{poke.name}</div>)
            })}
        </div>
    </div>
  )
}

export default App;
