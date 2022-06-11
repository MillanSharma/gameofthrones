import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { getTotals, removeFromCart } from "../slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();


  const handleRemove = (val) => {
    dispatch(removeFromCart(val));
  };

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const navigate = useNavigate();
  return (
    <div className="cart__container">
      <div className="cart__title">
        <h2>Shopping Cart</h2>
      </div>
      {cart.cartItems?.length === 0 ? (
        <div className="empty__container">
          <div className="empty__cart">Cart is empty</div>
          <button
            onClick={() => navigate("/shop")}
            className="empty__continueShopping"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart__elements">
            <div className="cart__productName">Product</div>
            <div className="cart__quantity">Quantity</div>
            <div className="cart__price">Price</div>
            <div className="cart__price">Remove</div>
          </div>

          <div className="cart__items">
            {cart.cartItems?.map((val) => (
              <>
                <div className="cart__content">
                  <div className="item__name">
                    <div className="blackTshirt">
                      <img
                        src="https://www.nicepng.com/png/full/72-724487_black-tshirt-front-and-back-png-vector-black.png"
                        alt="Black tshirt"
                        className="tshirtImage"
                      />

                      <img src={val.houseImg} className="houseOnTshirtCart" />

                      <div className="textOnTshirtCart">{val.text}</div>
                    </div>
                  </div>
                  <div className="item__quantity">
                  1
                  </div>
                  <div className="item__price">₹ 250</div>
                  <div className="remove__button_div">
                  <button
                  className="remove__button"
                    onClick={() => handleRemove(val)}
                  >
                    Remove
                  </button>
                  </div>
                </div>
              </>
            ))}
          </div>

          <div className="cart__sumtotal">
            <h3>Total:₹ {cart?.cartTotalAmount}</h3>

            <button className="checkout__btn">CHECK OUT</button>
            <button
              className="continue__shopping"
              onClick={() => navigate("/shop")}
            >
              Continue Shopping
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
