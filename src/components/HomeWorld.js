import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default function HomeWorld(props){
    const {character} = props
    const [homeWorld, setHomeWorld] = useState([])
    
    useEffect(()=> {
    axios.get(`${character.homeworld}`)
    .then(res => {
        setHomeWorld(res.data)
    }).catch(err => {
        console.log(err)
    })
    },)

    return (
        <div>
            <ul>
                <li>Name: {homeWorld.name}</li>
                <li>Terrain: {homeWorld.terrain}</li>
                <li>Climate: {homeWorld.climate}</li>

            </ul>
        </div>
    )
}