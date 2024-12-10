import React from 'react'
import { Header } from './Header'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromCart,calculateTotalPrice } from '../redux/slice/cartSlice'
export const DisplayCart = () => {

    const { cartItem,totalPrice } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const removeCartItem = (id)=>{
        dispatch(removeFromCart(id))
        dispatch(calculateTotalPrice())
    }

    return (
        <>
            <Header />
            {
                cartItem.length > 0 &&
                cartItem.map((cart) => (
                    <div className="container my-3">
                        <div className="row">
                            <div className="col">
                                <div className="card shadow-lg">
                                    <div className="card-body">
                                        <h5 className="card-title">{cart.title}</h5>
                                        <p className="card-text">Price: ${cart.price}</p>
                                        <button className="btn btn-danger" onClick={()=>removeCartItem(cart.id)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                ))
            }
            <div className='container'>
            <div className='card shadow-lg'>
           <div className='card-footer '>
              <h3>Total Price : ${totalPrice}</h3>  
           </div>
            </div>
            </div>
        </>
    )
}
