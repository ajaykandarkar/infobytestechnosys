import { useState } from "react";
import { useNotifications } from "../hooks/NotificationContext";
export const ProductCard = ({ title, price, image, rating, category, description }) => {
    const { addNotification } = useNotifications();
   const [showCartBtn,setShowCartBtn] = useState(true)
    const addToCart = ()=>{
      setShowCartBtn(!showCartBtn)
      addNotification(`${category} added to cart`)
    }

    return (
      <div className="container mt-2">
        <div className="row ">
          <div className="col-md-4">
            <div className="card shadow-lg p-4" style={{ width: "20rem" }}>
              <img src={image} className="card-img-top m-4" alt={title} style={{ height: "238px", width:"200px" }} />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text text-muted">{category}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold text-primary">₹{price}</span>
                  <span className="badge bg-success">{rating} ★</span>
                </div>
                <button className={showCartBtn ? "btn btn-primary mt-3" : "btn btn-danger mt-3" } onClick={()=>addToCart(category)}>{showCartBtn ? 'Add to Cart' : 'remove from cart'}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  