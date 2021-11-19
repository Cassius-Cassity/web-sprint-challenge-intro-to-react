
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character'



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])
  
  //const [currentCharacterId, setCurrentCharacterId] =useState(null)
 // const [CharactersId, setCharactersId] = useState(null)
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  useEffect(()=> {
    axios.get('https://swapi.dev/api/people/?format=api')
    .then(res=> {
     setCharacters(res.data)
    console.log(res.data)
    }).catch(err=>{
      console.log(err)
    })
  },[])
  



  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map(character =>{
          return <Character character={character} id={character.id}/>
        })
        }
        
      
   </div>
  );
}

export default App;
