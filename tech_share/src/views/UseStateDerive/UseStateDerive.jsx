/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';

const UseStateDerive = () => {
  const [products, setProducts] = useState([
    { id: 1, title: 'black sneakers', quantity: 1 },
    { id: 2, title: 'red t-shirt', quantity: 1 },
    { id: 3, title: 'blue jeans', quantity: 1 },
  ]);

  const [selectedProduct, setSelectedProduct] = useState({});

  // const [selectedId, setSelectedId] = useState(null);
  // const selectedProduct = products.find((p) => p.id === selectedId);

  const increment = (id) => {
    setProducts((prev) => {
      return prev.map((product) => {
        return product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product;
      });
    });
  };

  const handleChoose = (id) => {
    const product = products.find((p) => p.id === id);
    setSelectedProduct(product);
    // setSelectedId(id);
  };

  return (
    <>
      <h1 className="text-red-700 mb-7">Be careful about React derived states!</h1>
      <div>
        <h2>All Products</h2>
        {products.map((product) => (
          <div key={product.id}>
            <span>
              {product.title}
              <button type="button" onClick={() => handleChoose(product.id)}>Choose</button>
            </span>
            <div>
              <button type="button">-</button>
              <span>{product.quantity}</span>
              <button type="button" onClick={() => increment(product.id)}>+</button>
            </div>
          </div>
        ))}
        <h2>Selected Product</h2>
        <span>{selectedProduct?.title}</span>
        <span>{selectedProduct?.quantity}</span>
      </div>
    </>
  );
};

export default UseStateDerive;
