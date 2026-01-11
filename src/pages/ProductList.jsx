import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = response.data;
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container relative mx-auto px-10">
      <h1 className="text-center text-4xl mt-10">My Organized Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 flex-wrap gap-5 justify-center mt-10 mb-20">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
