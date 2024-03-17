//import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useContext } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import Products from './component/Products/Products';
import ProductDetails from './component/ProductDetails/ProductDetails';
import {ProductContextProvider, ProductContext} from './component/ProductContextProvider/ProductContextProvider'

//debounce function for search to avoid many api calls
//hamburger menu
function App() {

  return (
    <ProductContextProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Products/:prodId" element={<ProductDetails />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
    </ProductContextProvider>
  );
}

export default App;
