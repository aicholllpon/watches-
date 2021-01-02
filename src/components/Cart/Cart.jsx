import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AdminContext } from '../../contexts/AdminContext';
import { calcSubPrice, calcTotalPrice } from '../../helpers/calcPrice';
import Spinner from '../Spinner/Spinner';
import './Cart.css';

const Cart = () => {
    const { cartData, getCart, changeCountProducts, deleteFromCart, makeOrder } = useContext(AdminContext)

    useEffect(() => {
        getCart()
    }, [])

    function handleChangeCount(e, id) {
        changeCountProducts(e.target.value, id)
    }

    return (
        <div className="cart">
            {cartData.products ? (
                <div className="col-sm-11 col-md-8 col-lg-8 col-xl-8">
                    <h3>Корзина</h3>
                    {cartData.products.map(item => (
                        <div key={item.product.id} className="product-block">
                            <img src={item.product.image}></img>
                            <h5>{item.product.title}</h5>
                            <div className="product__count">
                                <p>Количество</p>
                                <input onChange={(e) => handleChangeCount(e, item.product.id)} type="number" value={item.count} />
                            </div>
                            <div className="product__cost">
                                <p>Итого</p>
                                <p className="cost">${calcSubPrice(item)}</p>
                            </div>
                            <button onClick={() => deleteFromCart(item.product.id)}>Удалить</button>
                        </div>
                    ))}
                    <h4>Всего: ${calcTotalPrice(cartData.products)}</h4>
                    <Link to="/payment" style={{color: 'black'}}>
                        <button onClick={makeOrder}>Оплатить</button>
                    </Link>
                    
                </div>
            ) : (<Spinner />)}
        </div>
    );
};

export default Cart;