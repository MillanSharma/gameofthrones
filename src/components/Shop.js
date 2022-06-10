import React, { useEffect, useState } from 'react'
import "./Shop.css"
import { motion } from "framer-motion"
import axios from 'axios';
import TypeWriterEffect from "react-typewriter-effect"
function Shop() {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        axios.get("https://www.anapioficeandfire.com/api/books")
        .then((response)=>{
            setBooks(response.data);
        })
        .catch((err)=>console.log(err))
    },[])
  return (
    <div className='shop__container'>
    
        <div className='shop__about'>
            <img
            className='shop__about__img'
            src="https://img.theweek.in/content/dam/week/magazine/theweek/leisure/images/2021/7/1/67-george-rr-martin.jpg"
            alt=""/>
            <div className='shop__about__details'>
            <TypeWriterEffect 
                textStyle={{fontFamily:"Red Hat Display",
                fontSize: '19'
            }}    
                startDelay={100}
                cursorColor="white"
                text={"George R.R. Martin, in full George Raymond Richard Martin, original name George Raymond Martin, (born September 20, 1948, Bayonne, New Jersey, U.S.), American writer of fantasy, best known for his Song of Ice and Fire series (1996– ), a bloody saga about various factions vying for control of a fictional kingdom."}
                typeSpeed={100}/>
            </div>
        </div>
        <div className='shop__items'>
            {books.map((book, key=book.isbn)=>(

                <motion.div key={key}
                className='shop__card'
                initial={{ scale: 0 }}
                animate={{ rotate: 180, scale: 1, duration: 0.2 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
                
>
<motion.div
  className={`shop__item__${book.url.substring(book.url.lastIndexOf("/")+1)}`}
  whileHover={{ scale: 1.18,rotate:180 }}
>
   
    </motion.div>
    <div className='shop__item__info'>
        <span>{book.name}</span>
        <h3>₹{parseInt(book.isbn.substring(book.isbn.length - 3))}</h3>
    <button>Add to cart</button>
        </div>
    </motion.div>
))}

    </div>
    </div>
  )
}

export default Shop