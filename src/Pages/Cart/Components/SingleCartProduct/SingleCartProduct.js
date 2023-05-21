import { NavLink } from 'react-router-dom';
import { DataState } from '../../../../Contexts/Data/DataContext';
import './SingleCartProduct.css';

export const SingleCartProduct = ({ product }) => {
  const { _id, image, rating, reviews, size, category, itemName, oldPrice, newPrice, discount, isTrending } = product
  const { dispatch, state: { wishlist } } = DataState()
  const token = localStorage.getItem("encodedToken")

  const removeFromCart = async () => {
    try {
      const response = await fetch(`/api/user/cart/${_id}`, {
        method: "DELETE",
        headers: {
          authorization: token
        }
      })
      const data = await response.json()
      dispatch({ type: "CART_OPERATIONS", payload: data.cart })


    } catch (e) {
      console.log(e)
    }
  }


  const moveToWishlist = async () => {
    try {
      const response = await fetch('/api/user/wishlist', {
        method: "POST",
        headers: {
          authorization: token
        },
        body: JSON.stringify({ product })
      })

      const data = await response.json();
      dispatch({ type: "WISHLIST_OPERATIONS", payload: data.wishlist });

    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="cart-product-card ">
      <div className="cart-product-details">
        <img src={image} alt={itemName} className="cart-product-img" />
        <div className="product-info">
          <h4 className='cart-item-name'>{itemName}</h4>
          <div className="cart-product-prices">
            <span className='new-price get-fontsize font-1-rem'>₹{newPrice}</span>
            <span className='old-price font-1-rem'>₹{oldPrice}</span>
            <span className='discount get-fontsize'>({discount}%OFF)</span>
          </div>
          <div className='quantity-operations'>

            <p className='qty-label'>Quantity: </p>
            <button className='decrease-qty'>-</button>
            <p className='qty'>1</p>
            <button className='increase-qty'>+</button>
          </div>
        </div>
      </div>
      <div className='remove-operations'>
        <button className='remove-product ' onClick={removeFromCart}>Remove</button>
        {wishlist?.some(product => product._id === _id) ? <NavLink to="/wishlist"><button className='already-in-wishlist' >Already in wishlist</button></NavLink> : <button className='move-to-wishlist' onClick={() => moveToWishlist(product)}>Move To Wishlist</button>}
      </div>
    </div>
  )
}