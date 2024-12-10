import { useState } from "react";
import "./Card.css";
import {useDispatch } from "react-redux";
import { addToCart, removeFromCart,calculateTotalPrice } from "../redux/slice/cartSlice";

export const Card = ({ title, price, image, rating, id }) => {
  const [isInCart, setIsInCart] = useState(false); 
  const dispatch = useDispatch();

  const handleCartAction = () => {
    if (!isInCart) {
      dispatch(addToCart({ id, title, price, image, rating })); 
      dispatch(calculateTotalPrice())
    } else {
      dispatch(removeFromCart(id)); 
      dispatch(calculateTotalPrice())
    }
    setIsInCart(!isInCart); 
  };

  return (
    <div className="card p-5 shadow-lg" style={{ width: "20rem", height: "auto" }}>
      <img
        src={image}
        className="card-img-top img-fluid"
        style={{height:"173x", width:"300px"}}
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          <strong>Price:</strong> ${price} <br />
          <strong>Rating:</strong> {rating.rate} ({rating.count} reviews)
        </p>
        <button
          onClick={handleCartAction}
          className={`btn ${isInCart ? "btn-danger" : "btn-primary"}`}
        >
          {isInCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};
