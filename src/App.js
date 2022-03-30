import React from 'react';
import logo from './logo.svg';
import Nav from './components/Nav';
import ProductCard from './components/ProductCard';
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <h1>Products</h1>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </main>
    </div>
  );
}

export default App;
