import "./Card.css";
import {useDispatch,useSelector } from "react-redux";
import { addToCart, removeFromCart,calculateTotalPrice } from "../redux/slice/cartSlice";

export const Card = ({ title, price, image, rating, id }) => {
  const dispatch = useDispatch();
  const toggleCartBtn = useSelector((state) => state.cart.cartToggleStatus[id] ?? true);
  const handleCartAction = () => {
    if (toggleCartBtn) {
      dispatch(addToCart({ title, price, image, rating, id}));
    } else {
      dispatch(removeFromCart(id));
    }
    dispatch(calculateTotalPrice())
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
          className={`btn ${toggleCartBtn ? 'btn-primary' : 'btn-danger'}`}
        >
         {toggleCartBtn ? 'Add to Cart' : 'Remove'}
        </button>
      </div>
    </div>
  );
};
