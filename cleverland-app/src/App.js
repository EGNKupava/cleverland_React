import React from 'react';
import './App.css';
import ProductList from './components/productList/ProductList';

function App() {
  return (
    <div className="App">
      <h1 className="main-title">Cleverland Practice</h1>
      <div>
       <ProductList className="ProductList" />
      </div>
    </div>
  );
}

export default App;
