import React, { useState, useEffect } from "react";
import "./BuildTshirt.css";
import { useSelector, useDispatch } from "react-redux";
import { getTotals, addToCart } from "../slices/cartSlice";

function BuildTshirt() {
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [text, setText] = useState("");

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = () => {
    const product = {
      id: selectedHouse + text,
      price: 250,
      houseImg: houselist[selectedHouse],
      text: text,
    };
    dispatch(addToCart(product));
    setSelectedHouse(null);
    setText("")
  };
// static image urls for logo
  const houselist = {
    lannister:
      "https://www.freelogoservices.com/blog/wp-content/uploads/House_Lannister.svg_.png",
    arryn:
      "https://www.freelogoservices.com/blog/wp-content/uploads/House_Arryn.svg-1.png",
    grayjoy:
      "https://www.freelogoservices.com/blog/wp-content/uploads/House_Greyjoy.svg_.png",
    stark:
      "https://www.freelogoservices.com/blog/wp-content/uploads/House_Stark.svg_.png",
    tyrell:
    "https://www.freelogoservices.com/blog/wp-content/uploads/House_Tyrell.svg_.png",
    martell:
    "https://www.freelogoservices.com/blog/wp-content/uploads/House_Martell.svg_-470x470.png",
    targaryan:
    "https://www.freelogoservices.com/blog/wp-content/uploads/House_Targaryen.svg_.png",
    baratheons:
    "https://www.freelogoservices.com/blog/wp-content/uploads/House_Baratheon.svg_.png"

  };

  return (
    <>
    <div className="heading">
      <h3>design your custom t-shirt</h3>
    </div>
    <div className="tshirt__container">
    
      <div className="col1">
      <div className="logo__container">
        {Object.keys(houselist).map((val) => (
          <img
            key={val}
            src={houselist[val]}
            alt={val}
            onClick={() => setSelectedHouse(val)}
          />
        ))}
      </div>
      </div>
      <div className="col2">
      <form className="tshirt__form">
        <label className="tshirt__label">Enter the text </label>
        <input
          className="tshirt__text"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value.slice(0, 9))}
        />
      </form>
      
      <div className="tshirt__builder">
        <div className="blackTshirt">
          <img
            src="https://www.nicepng.com/png/full/72-724487_black-tshirt-front-and-back-png-vector-black.png"
            alt="Black tshirt"
            className="build__tshirt"
          />
          {selectedHouse && (
            <img
              src={houselist[selectedHouse]}
              alt={selectedHouse}
              className="houseOnTshirt"
            />
          )}
          {text && <div className="textOnTshirt">{text}</div>}
        </div>
        {selectedHouse==null || text==="" ?
             (

              <button title="Select logo and Enter  text"
              className="build__addtocart__off"
              onClick={handleAddToCart}>Add to cart</button>
              )   
          :
          (

            <button 
            className="build__addtocart"
            onClick={handleAddToCart}>Add to cart</button>
            )  
        }
      </div>
      </div>
    </div>
    </>
  );
}

export default BuildTshirt;
