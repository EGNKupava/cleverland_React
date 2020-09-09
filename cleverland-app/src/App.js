import React from 'react';
import './App.css';
import ProductList from './components/productList/ProductList';

function App() {
  return (
    <div className="App">
     <h1 className="main-title">Cleverland Practice</h1>
     <ProductList className="ProductList" />
    </div>
  );
}

export default App;
