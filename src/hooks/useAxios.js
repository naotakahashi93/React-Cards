import React, {useState} from "react";
import axios from "axios";
import uuid from "uuid";
import { useEffect } from "react";

// useAxios should take in a URL, and similar to useState, it should return an array with two elements. 
// The first element is an array of data obtained from previous AJAX requests (since we will add to this array, 
// it’s a piece of state). The second element is a function that will add a new object of data to our array.

// Once you’ve written this hook, refactor PlayingCardList to use this custom hook. 
// (Don’t worry about PokeDex for now - that’s coming in the next part!

// Figure out a way to modify your useAxios hook so that when you call useAxios you can just provide a base url, 
// and when you want to add to your array of response data in state, you can provide the rest of the url.

// Once you’ve done this, refactor PokeDex to use useAxios. 
// Make sure PlayingCardList still works too!

const useAxios = (baseUrl) => {
    const [data, setData] = useState([])

    const getData = async (otherEndpoint ="") => {
    const res = await axios.get(`${baseUrl}${otherEndpoint}`)
    setData(r => [ 
        ...r, 
        {
        ...res.data,
        id: uuid() 
    } ])
    console.log("RES IN HOOOK", res.data)
    console.log("OTHER END POINT IN HOOOK", otherEndpoint)
    }

    const removeData = ()=>{
        setData([])
    }

    console.log(data, "DATA IN HOOK")
    
    return [data, getData, removeData]

}

export default useAxios;