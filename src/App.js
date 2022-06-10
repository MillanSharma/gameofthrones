import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Welcome from './components/Welcome';
import Shop from "./components/Shop"
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route exact path="/" element={<Welcome/>}></Route>
          <Route exact path="/shop" element={<Shop/>}></Route>
        </Routes>
      </Router>
          </div>
  );
}

export default App;
