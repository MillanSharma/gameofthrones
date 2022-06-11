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
  };

  const houselist = {
    lannister:
      "https://www.freelogoservices.com/blog/wp-content/uploads/House_Lannister.svg_.png",
    arryn:
      "https://www.freelogoservices.com/blog/wp-content/uploads/House_Arryn.svg-1.png",
    grayjoy:
      "https://www.freelogoservices.com/blog/wp-content/uploads/House_Greyjoy.svg_.png",
    stark:
      "https://www.freelogoservices.com/blog/wp-content/uploads/House_Stark.svg_.png",
  };

  return (
    <div className="tshirt__container">
      <h2>Choose your house</h2>
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
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </div>
  );
}

export default BuildTshirt;
