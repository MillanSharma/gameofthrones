import React, { useEffect } from "react";
import "./Navigation.css";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

import { getTotals } from "../slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";

function Navigation() {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <div className="navigation__container">
      <div className="navigation__toggle">
        <div className="about__and__shop">
          <div className="shop" onClick={() => navigate("/char-card")}>
            Char-Card
          </div>
          <div className="houses" onClick={() => navigate("/houses")}>
            Houses
          </div>
          <div className="build" onClick={() => navigate("/buildtshirt")}>
            Build
          </div>
        </div>
      </div>
      <div className="navigation__title">
        <img src={logo} alt="" onClick={() => navigate("/")} />
      </div>

      <div className="navigation__cart">
        <LocalMallIcon
          onClick={() => navigate("/cart")}
          className="cart"
          style={{ width: "50px", height: "50px", color: "black" }}
        />
      </div>
      <div className="navigation__items__incart">
        {cart.cartItems.length || 0}
      </div>
    </div>
  );
}

export default Navigation;
