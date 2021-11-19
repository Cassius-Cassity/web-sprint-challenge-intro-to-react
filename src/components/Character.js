// Write your Character component here
import React, { useState } from 'react';
import CharacterInfo from './CharacterInfo';

export default function Character(props) {
   const { character } = props
    const [toggle, setToggle] = useState(false);

    const onClick = () => {
        setToggle(!toggle)
    }

    return (
        <div>
        <button onClick={onClick}>{character.name}</button>
        {toggle && 
        <CharacterInfo character={character}/>}
        </div>
    )
}