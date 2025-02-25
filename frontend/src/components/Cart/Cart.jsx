import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import {useNavigate} from 'react-router-dom'

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotal } = useContext(StoreContext);

  const navigate = useNavigate()

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="item image" />
                  <p>{item.name}</p>
                  <p>Rs {item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>Rs {item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">x</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>

            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs {getTotal()}</p>
            </div>
            <hr />

            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs {getTotal() === 0 ? 0 : 50}</p>
            </div>
              <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rs {getTotal() === 0 ? 0 : getTotal()+50}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promo">
          <div><p>If you've a promo code, Enter here</p></div>
          <div className="cart-promo-input" >
            <input type="text" placeholder="Promocode"/>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
