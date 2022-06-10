import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Welcome from './components/Welcome';
import CharacterCard from "./components/CharacterCard"
import Cart from "./components/Cart"
import Houses from "./components/Houses"
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route exact path="/" element={<Welcome/>}></Route>
          <Route exact path="/shop" element={<CharacterCard/>}></Route>
          <Route exact path = "/cart" element={<Cart/>}></Route>
          <Route exact path="/houses" element={<Houses/>}></Route>
        </Routes>
      </Router>
          </div>
  );
}

export default App;
