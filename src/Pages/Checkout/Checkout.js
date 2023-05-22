import React from 'react'
import './Checkout.css'
export const Checkout = () => {
  return (
    <div className='checkout-container flex direction-column'>
      <h3 className='text-uppercase border-top-1  padding-1 font-1 padding-left-0 text-center bottom-border-1'>order details</h3>
      <div className='flex justify-between'>
        <p className='font-bold top-padding-08  bottom-margin-md'>Item</p>
        <p className='font-bold top-padding-08  bottom-margin-md'>Qty</p>
      </div>

      {/*  */}
      <div className='padding-bottom-1'>

        <div className='flex justify-between '>
          <p>Roadster</p>
          <p>1</p>
        </div>
        <div className='flex justify-between'>
          <p>Puma</p>
          <p>5</p>
        </div>

      </div>
      {/*  */}
      <h3 className='text-uppercase border-top-1  margin-bottom-1 padding-1 font-1 padding-left-0 text-center bottom-border-1'>price details</h3>

      {/* */}
      <div className='padding-bottom-1 '>

        <div className='flex justify-between'>
          <p>Price(3) </p>
          <p>₹ 2399</p>
        </div>

        <div className='flex justify-between'>
          <p>Discount</p>
          <p>-₹ 1230</p>
        </div>

        <div className='flex justify-between'>
          <p>Delievery Charges</p>
          <p className='text-uppercse'>free</p>
        </div>

        <div className='flex justify-between'>
          <p>Coupon Discount</p>
          <p>₹ 0</p>
        </div>

        <div className='flex justify-between'>
          <p>Total Amount</p>
          <p>₹ 1169.00</p>
        </div>
      </div>

      {/*  */}

      <h3 className='text-uppercase border-top-1  margin-bottom-1 padding-1 font-1 padding-left-0 text-center bottom-border-1'>deliver to</h3>

      <div className='delivery-address margin-bottom-1 font-sm'>
        <p className='font-1 font-bold'>John Doe</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.India. 452412</p>
        <p>Phone Number : 123456789</p>
      </div>

      <button className='place-order-btn cursor-pointer'>Place Order</button>
    </div>
  )
}
