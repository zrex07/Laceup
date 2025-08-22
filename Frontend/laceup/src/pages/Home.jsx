// Home.jsx
import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const Home = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = searchQuery
          ? `http://localhost:5000/api/products?search=${encodeURIComponent(searchQuery)}`
          : "http://localhost:5000/api/products";

        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white py-16 shadow-sm">
        <div className="container mx-auto px-4 text-center mt-8">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Lace<span className="text-blue-600">Up</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your one-stop shop for the best shoes in town. Browse our latest collection and find your perfect pair!
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
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
