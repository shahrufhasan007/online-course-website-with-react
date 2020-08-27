import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Cards></Cards>
    </div>
  );
}

export default App;
