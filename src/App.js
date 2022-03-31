import React from 'react';
import logo from './logo.svg';
import Nav from './components/Nav';
import ProductCard from './components/ProductCard';
import ProductCard2 from './components/ProductCard2';
import ProductCard3 from './components/ProductCard3';
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <h1>Featured</h1>
        <div className='featured-products'>
          <ProductCard></ProductCard>
          <ProductCard2></ProductCard2>
          <ProductCard3></ProductCard3>
        </div>
      </main>
    </div>
  );
}

export default App;
