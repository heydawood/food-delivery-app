import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './PlaceOrder.css'




const PlaceOrder = () => {

  const  {getTotal} = useContext(StoreContext)


  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className="title">Delivery Information</p>
        <div className="multi-feilds">

          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>

        <input type="email" placeholder='Email' />
        <input type="text" placeholder='Your Adress' />

        <div className="multi-feilds">

          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>

        <div className="multi-feilds">

          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' name="" id="" />

      </div>

      

      <div className='place-order-right'> 

      <div className="cart-total">
          <h2>Cart Total </h2>
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
          <button>PROCEED TO PAYMENT</button>
        </div>

      </div>
    </form>
  )
}

export default PlaceOrder
