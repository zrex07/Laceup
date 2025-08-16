// src/pages/Home.jsx
import React from "react";
import ProductCard from "../components/ProductCard";
import {useState, useEffect } from "react";

const Home = () => {

   const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16 shadow-sm">
        <div className="container mx-auto px-4 text-center mt-8 ">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to <span className="text-blue-600">LaceUp</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your one-stop shop for the best shoes in town. Browse our latest
            collections and find the perfect pair for every occasion.
          </p>
        </div>
      </section>

      <section>
        <div>
          <img src="C:\Users\tabis\OneDrive\Desktop\Laceup\Frontend\laceup\src\assets\shoe-bg.jpg" alt="" />
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 ">
       <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      ) : (
        <p className="text-gray-500 col-span-full text-center">
          No products found.
        </p>
      )}
    </div>
      </section>
    </div>
  );
};

export default Home;
