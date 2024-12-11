import React from "react";
import { useNavigate } from "react-router-dom";
export const Product = () => {

  const navgate = useNavigate()
  const products = [
    {
      id: 1,
      title: "T-Shirt",
      description: "Comfortable cotton t-shirt",
      price: "$15",
      image: "https://www.bing.com/th?id=OIP.lwNibySOroOzP6-jm1ofUQHaJ4&w=150&h=200&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", 
    },
    {
      id: 2,
      title: "Jeans",
      description: "Stylish blue denim jeans",
      price: "$40",
      image: "https://th.bing.com/th?id=OIP.mklGzIQE8-ZyfdJ0Uq4NJgHaJ3&w=216&h=288&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
    {
      id: 3,
      title: "Sneakers",
      description: "Trendy sneakers for everyday use",
      price: "$60",
      image: "https://th.bing.com/th?id=OIP.YguOkIP2xIjpoReX_q0R4gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Our Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow align-items-md-center">
              <img
                src={product.image}
                className="card-img-top img-fluid"
                alt={product.title}
                style={{ height: "150px", width: "150px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <h6 className="card-subtitle mb-2 text-muted">{product.price}</h6>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary w-100" onClick={()=>navgate(`details/${product.id}`)}>Product Detals</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
