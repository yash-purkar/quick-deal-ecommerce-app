import React from 'react'
import { AiOutlineStar, AiFillHeart } from 'react-icons/ai'

import './SingleProduct.css'
import { DataState } from '../../Contexts/Data/DataContext'
import { addToCart } from '../../Services/Cart/CartServices'

export const SingleProduct = ({ product }) => {
  const { _id, image, rating, reviews, size, category, itemName, oldPrice, newPrice, discount, isTrending } = product
  const { state: { cart } } = DataState()
  return (
    <div className='product-card'>
      <div className='card-header'>
        <img src={image} alt={itemName} className='product-image' />
        <div>
          <div className='trending-like-box'>
            {/* <span className='trending'>Trending</span> */}
            <span className='like'><AiFillHeart /></span>
          </div>

          <p className='prod-size'>{size}</p>
        </div>
      </div>
      <div className='name-and-rating'>
        <p className='product-name'>{itemName}</p>
        <div className='rating-and-size'>
          <p className='ratings-info'><span className='rating-star'><AiOutlineStar /><span className='rating'>{rating}</span></span></p>
        </div>

      </div>
      <div className='price-and-discount'>

        <div className="prices">
          <span className='new-price'>₹{newPrice}</span>
          <span className='old-price'>₹{oldPrice}</span>
        </div>
        <p className='discount'>{discount}% OFF</p>
      </div>
      <button className='add-to-cart' onClick={() => addToCart}>Add To Cart</button>

    </div>
  )
}
