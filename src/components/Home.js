import React from 'react'

const Home = (props) => {
    console.log("Home",props.cartData);
    return (
        <div>
            <span className='cart-Count'>{props.cartData.length}</span>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" className='img-cart'/>
            <h1>Mobile Shop</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.91-img.com/gallery_images_uploads/7/a/7ab41b65ad80d248b1be63abab03c5ac9e8c58e6.jpg?tr=h-550,w-0,c-at_max" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button
                        onClick={
                            ()=>{props.addToCartHandle({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home