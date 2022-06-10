import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Welcome from './components/Welcome';
import Shop from "./components/Shop"
import Cart from "./components/Cart"
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route exact path="/" element={<Welcome/>}></Route>
          <Route exact path="/shop" element={<Shop/>}></Route>
          <Route exact path = "/cart" element={<Cart/>}></Route>
        </Routes>
      </Router>
          </div>
  );
}

export default App;
