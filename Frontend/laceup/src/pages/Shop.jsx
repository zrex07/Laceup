import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products") // Change if backend URL is different
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md hover:shadow-lg transition-shadow p-4"
          >
            <Link to={`/product/${product._id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;