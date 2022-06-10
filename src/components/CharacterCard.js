import React, { useEffect, useState } from 'react'
import "./CharacterCard.css"
import axios from 'axios';
function Shop() {
    const [characters, setCharacter] = useState([]);
    useEffect(()=>{
        axios.get("https://www.anapioficeandfire.com/api/characters?pageSize=20")
        .then((response)=>{
            setCharacter(response.data);
        })
        .catch((err)=>console.log(err))
    },[])
  return (
    <div className='character__container'>
            <div className='character__inner'>
        {characters.map((character,key = character.url)=>(

            <div className='character' key={key}>
                {character.name===""?(

                    <img 
                    src={`https://ui-avatars.com/api/?name=${character.aliases[0]+character.aliases[1]}}&&background=101010&color=fff`} />
                    ):
                    <img 
                    src={`https://ui-avatars.com/api/?name=${character?.name}}&&background=101010&color=fff`} />
                    }
                <div className='character__desc'>
                <span>Name: {character?.name}</span>
                <p>Aliase: {character?.aliases[0]}</p>
                <h4>Gender: {character?.gender}</h4>
                <p>Culture: {character?.culture}</p>
                <p>Part of {character.books.length}{character.books.length===1? " Book":" Books"}</p>
            </div>
                </div>
                ))}
            </div>
            </div>
  )
}

export default Shop