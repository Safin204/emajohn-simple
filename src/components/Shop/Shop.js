import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProdcts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProdcts(data))
    }, []);
    const handleClick = (product) => {
        console.log(product);
        const newCart = [...cart, product]
        setCart(newCart);
    }


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id}
                        product={product}
                        handleClick={handleClick}></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Order Smmary</h4>
                <p>Selected Items:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;