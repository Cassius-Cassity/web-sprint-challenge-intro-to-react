import React from 'react';
import { useState } from 'react/cjs/react.development';
import Movies from './Movies';



export default function CharacterInfo (props) {
const { character } = props
const [toggle, setToggle] = useState(false)

const onClick = () =>{
    setToggle(!toggle)
}
return (
    <div>
        <p>Height: {character.height}</p>
        <p>Birth Year: {character.birth_year}</p>
        <p>Gender: {character.gender}</p>
        <p>Weight: {character.mass}</p>
        <p>Skin Color: {character.skin_color}</p>
        <h3 onClick={onClick}>Movies</h3>
        {toggle && <Movies character={character}/>}
        
    </div>
)
}
