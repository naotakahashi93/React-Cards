import React, {useState} from "react";

//write a custom hook called useFlip which will hold the business logic for flipping any type of card.
//useFlip doesn’t need to take an argument, and similar to useState, it should return an array with two elements. 
//The first element is the current flip state of the card, and the second element is a function that will toggle the flip state.
//Once you’ve written this hook, refactor PokemonCard and PlayingCard to use this custom hook.

const useFlip = (initialVal = true) => {
    const [value, setValue] = useState(initialVal);
    // console.log(value, "VALUE")
    const flip = () => {
        setValue( v => !v)
    }

    return [value, flip]
}

export default useFlip;