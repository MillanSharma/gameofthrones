import React from 'react'
import "./BuildTshirt.css"
function BuildTshirt() {

  return (
    <div className='tshirt__container'>
        <h2>Choose your house</h2>
        <div className='logo__container'>
            <img 
            src= "https://www.freelogoservices.com/blog/wp-content/uploads/House_Lannister.svg_.png"
            alt="house lannister"/>
            <img 
            src= "https://www.freelogoservices.com/blog/wp-content/uploads/House_Arryn.svg-1.png"
            alt="house arryn"/>
            <img 
            src= "https://www.freelogoservices.com/blog/wp-content/uploads/House_Greyjoy.svg_.png"
            alt="house grayjoy"/>
            <img 
            src= "https://www.freelogoservices.com/blog/wp-content/uploads/House_Stark.svg_.png"
            alt="house stark"/>
        </div>
        <form className='tshirt__form'>
            <label className='tshirt__label'>Enter the text </label>
            <input className="tshirt__text" type="text"/>
        </form>
        <div className='tshirt__builder'>
                <img 
                src="https://www.nicepng.com/png/full/72-724487_black-tshirt-front-and-back-png-vector-black.png"
                alt="Black tshirt" />
                </div>
    </div>
  )
}

export default BuildTshirt