import React, { useState } from 'react';
import Product from './Product';
import CartSummary from './CartSummary';

function App() {
  const [cartTotal, setCartTotal] = useState({ totalProducts: 0, totalPrice: 0 });

  const addToCartHandler = (price) => {
    setCartTotal({
      totalProducts: cartTotal.totalProducts + 1,
      totalPrice: cartTotal.totalPrice + parseFloat(price.replace(/,/g, '')) 
    });
  };

  let products = [
    { id: 1, name: "Toyota Corolla", price: "1,001,730.00", description: "Automobile" },
    { id: 2, name: "Ford F-150", price: "1,430,100.00", description: "Automobile" },
    { id: 3, name: "Toyota Camry", price: "1,243,520.00", description: "Automobile" },
    { id: 4, name: "Honda Accord", price: "1,304,930.00", description: "Automobile" },
    { id: 5, name: "Toyota Vios", price: "700,000", description: "Automobile" },
    { id: 6, name: "Honda Civic", price: "110,000,000", description: "Automobile" },
    { id: 7, name: "Honda Supremo", price: "75,000.00", description: "Motorcycle" },
    { id: 8, name: "Nissan Rogue", price: "1,300,270.00", description: "Automobile" },
    { id: 9, name: "Ford Mustang", price: "1,346,200.00", description: "Automobile" },
    { id: 10, name: "Chevrolet Silverado 1500", price: "1,425,000.00", description: "Automobile" },
  ];

  return (
    <div className='App'>
      <CartSummary totalProducts={cartTotal.totalProducts} totalPrice={cartTotal.totalPrice.toLocaleString('en-US', {maximumFractionDigits: 2})} />
      {products.map(product => (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          addToCart={addToCartHandler}
        />
      ))}
    </div>
  );
}

export default App;