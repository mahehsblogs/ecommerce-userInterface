import React from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
// import products from "./products";

const products = [
  {
    id: 1,
    title: "Product 1",
    price: "$10.00",
    image: "https://picsum.photos/id/237/300/200",
  },
  {
    id: 2,
    title: "Product 2",
    price: "$15.00",
    image: "https://picsum.photos/id/238/300/200",
  },
  {
    id: 3,
    title: "Product 3",
    price: "$20.00",
    image: "https://picsum.photos/id/239/300/200",
  },
];

const App = () => {
  return (
    <>
      <Header />
      <div style={{ marginTop: "50px" }}>
        <ProductList products={products} />
      </div>
    </>
  );
};

export default App;
