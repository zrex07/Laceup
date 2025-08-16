const API_URL = "http://localhost:5000/api/products"; // Change when deploying

export const getProducts = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};

export const addProduct = async (productData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  });
  if (!response.ok) {
    throw new Error("Failed to add product");
  }
  return response.json();
};
