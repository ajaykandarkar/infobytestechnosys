import React, { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import axios from 'axios';

export const Products = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProductData(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {productData.length > 0 ? (
          productData.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <ProductCard
                title={product.title}
                price={product.price}
                image={product.image}
                rating={product.rating.rate}
                category={product.category}
                description={product.description}
              />
            </div>
          ))
        ) : (
          <p className="text-center">Loading products...</p>
        )}
      </div>
    </div>
  );
};
