import { NavLink, useNavigate } from 'react-router-dom';
import { DataState } from '../../../../Contexts/Data/DataContext';
import './SingleCartProduct.css';
import { removeFromCart, moveToWishlist, updateCartItemQty } from '../../../../Services/Cart/CartServices';
import { useState } from 'react';
import { addToWishlist, removeFromWishlist } from '../../../../Services/Wishlist/WishlistServices';
import { remove, success } from '../../../../Services/Toasts/ToastServices';
import { AiFillHeart } from 'react-icons/ai';


export const SingleCartProduct = ({ product }) => {
  const { _id, image, qty, rating, reviews, size, category, itemName, oldPrice, newPrice, discount, isTrending } = product
  const { dispatch, state: { cart, wishlist, token } } = DataState()



  // console.log(product._id)

  const navigate = useNavigate();
  const handleProductClick = (id) => {
    navigate(`/product/${id}`)
  }

  const handleQuantity = (type) => {
    updateCartItemQty(_id, type, dispatch, token)
  }

  const handleRemoveFromCart = (_id, dispatch, token) => {
    removeFromCart(_id, dispatch, token)
    remove("Removed From Cart")
  }


  return (
    <div className="cart-product-card ">
      <div className="cart-product-details">

        <img src={image} alt={itemName} className="cart-product-img cursor-pointer" onClick={() => handleProductClick(_id)} />
        {
          wishlist?.some(product => product._id === _id) && token ? <span className='like cart-like  wishlist-red' onClick={() => removeFromWishlist(_id, dispatch, token)}><AiFillHeart /></span> : <button className='like cart-like' onClick={() => addToWishlist(product, dispatch, token)} ><AiFillHeart /></button>
        }
        <div className="product-info">
          <h4 className='cart-item-name'>{itemName}</h4>
          <div className="cart-product-prices">
            <span className='new-price get-fontsize font-1-rem'>₹{newPrice}</span>
            <span className='old-price font-1-rem'>₹{oldPrice}</span>
            <span className='discount get-fontsize'>({discount}%OFF)</span>
          </div>

          <div className='quantity-operations'>
            <p className='qty-label'>Quantity: </p>
            <button onClick={() => handleQuantity("decrement", token)} className='decrease-qty cursor-pointer' disabled={qty < 2}>-</button>
            <p className='qty'>{qty}</p>
            <button onClick={() => handleQuantity("increment", token)} className='increase-qty cursor-pointer' >+</button>
          </div>

        </div>
      </div>
      <div className='remove-operations'>
        <button className='remove-product ' onClick={() => handleRemoveFromCart(_id, dispatch, token)}>Remove</button>
      </div>
    </div>
  )
}
