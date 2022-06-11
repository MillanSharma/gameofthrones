import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
import CharacterCard from "./components/CharacterCard";
import Cart from "./components/Cart";
import Houses from "./components/Houses";
import BuildTshirt from "./components/BuildTshirt";
import Verify from "./Verify";
function App() {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route
            exact
            path="/"
            element={
              !isVerified ? (
                <Verify setIsVerified={setIsVerified} />
              ) : (
                <Welcome />
              )
            }
          ></Route>
          <Route
            exact
            path="/char-card"
            element={
              !isVerified ? (
                <Verify setIsVerified={setIsVerified} />
              ) : (
                <CharacterCard />
              )
            }
          ></Route>
          <Route
            exact
            path="/cart"
            element={
              !isVerified ? <Verify setIsVerified={setIsVerified} /> : <Cart />
            }
          ></Route>
          <Route
            exact
            path="/houses"
            element={
              !isVerified ? (
                <Verify setIsVerified={setIsVerified} />
              ) : (
                <Houses />
              )
            }
          ></Route>
          <Route
            exact
            path="/buildtshirt"
            element={
              !isVerified ? (
                <Verify setIsVerified={setIsVerified} />
              ) : (
                <BuildTshirt />
              )
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
