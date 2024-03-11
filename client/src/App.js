import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Product from './components/pages/Product';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';

function App() {
  return (
    <>
    <Router>
      <NavbarComponent />
      <Routes>
        {/* error: This may happen if you return a Component instead of <Component /> from render. */}
        <Route path='/' element = {<Home/>}/>
        <Route path='/services' element = {<Services/>}/>
        <Route path='/products' element = {<Product/>}/>
        <Route path='/signup' element = {<SignUp/>}/>
        <Route path='/login' element = {<Login/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
