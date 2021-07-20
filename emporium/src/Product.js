import React from 'react'
import "./Product.css"

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p> Infinity Glide 120 Metal in-Ear Wireless Flexband Earphones</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
            </div>
            <img src="https://images-eu.ssl-images-amazon.com/images/I/61D+CNKWRTL._AC_UL160_SR160,160_.jpg"></img>
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
