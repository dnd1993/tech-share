/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, { useState } from "react";

const UseStateDerive = () => {
  const [products, setProducts] = useState([
    { id: 1, title: "black sneakers", quantity: 1 },
    { id: 2, title: "red t-shirt", quantity: 1 },
    { id: 3, title: "blue jeans", quantity: 1 },
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
      <h1 className="text-red-700 mb-7">
        Be careful about React derived states!
      </h1>
      <div className="border border-black rounded-md py-4">
        <h2 className="text-2xl font-bold mb-4">All Products</h2>
        {products.map((product) => (
          <div key={product.id} className="mb-5">
            <span>
              {product.title}
              <button
                className="ml-3 bg-green-700 text-white px-2 py-2"
                type="button"
                onClick={() => handleChoose(product.id)}
              >
                Choose
              </button>
            </span>
            <div className="mt-3">
              <button className="text-xl bg-red-500 text-white px-3 py-1" type="button">
                &minus;
              </button>
              <span className="mx-3">{product.quantity}</span>
              <button
                className="text-xl bg-red-500 text-white px-3 py-1"
                type="button"
                onClick={() => increment(product.id)}
              >
                &#43;
              </button>
            </div>
          </div>
        ))}
        <h2 className="text-xl font-semibold mt-10">Selected Product:</h2>
        <p>{selectedProduct?.title}</p>
        <p>{selectedProduct?.quantity}</p>
      </div>
    </>
  );
};

export default UseStateDerive;
