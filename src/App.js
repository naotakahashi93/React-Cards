import React from "react";
import CardTable from "./CardTable";

function App() {
  return (
    <CardTable />
  );
}

export default App;


//App
//   <CardTable />
//        <PlayingCardList />
//              <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
//        <PokeDex />
//              <PokemonSelect add={addPokemon} />
//              <PokemonCard key={cardData.id} front={cardData.sprites.front_default} back={cardData.sprites.back_default} name={cardData.name stats={cardData.stats.map(stat => ({ value: stat.base_stat, name: stat.stat.name}))}/>
//        
