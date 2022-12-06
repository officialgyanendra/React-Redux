import React from 'react'

const Header = (props) => {
    console.log("Header", props.cartData);
    return (
        <div>
            <span className='cart-Count'>{props.cartData.length}</span>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" className='img-cart' />
        </div>
    )
}

export default Header