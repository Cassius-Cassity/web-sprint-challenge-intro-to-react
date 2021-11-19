import React, { useState } from 'react';
import HomeWorld from './HomeWorld';




export default function Movies(props){
    const { character } = props
    const [toggle, onToggle] = useState(false)

    const onClick = () => {
        onToggle(!toggle)
    }
    
    return (
        <div>
            <p>{character.films}</p>
            <h3 onClick={onClick}>Home World</h3>
            {toggle && <HomeWorld character={character} />}
        </div>
    )
}