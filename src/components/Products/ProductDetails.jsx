import React, { useContext, useEffect, useState } from 'react';
import { AdminContext } from '../../contexts/AdminContext';
import './ProductDetails.css';
import Spinner from '../Spinner/Spinner';
import Header from '../Header/Header';

const ProductDetails = (props) => {
    const {
        getProductsDetails,
        productDetails,
        // getCommentsData,
        // comments,
        addComments,
        // comments,
    } = useContext(AdminContext)

    const [comment, setComment] = useState({
        nickname: "",
        text: "",
    })

    function handleInputsValue(e) {
        let obj = {
            ...comment,
            [e.target.name]: e.target.value,

        }
        setComment(obj)
    }

    function handleClick() {
        let obj = { ...productDetails }
        obj.comments.push(comment)
        addComments(obj)
        const newObj = {
            nickname: "",
            text: "",
        }
        setComment(newObj)
    }



    useEffect(() => {
        getProductsDetails(props.match.params.id)
        // getCommentsData()
    }, [])

    return (
        <div>
            <Header/>
        <div className="container details-block">
            {productDetails ? (
                <div>
                    <div className="single-item col-lg-6">
                        <div className="left-set">
                            <img className="image" src={productDetails.image} />
                        </div>
                        <div className="right-set">
                            <div className="title">{productDetails.title}</div>
                            <div className="brand">{productDetails.brand}</div>
                            <div className="price">${productDetails.price}</div>
                            <div className="cart-block">
                                <button>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                    <div className="description-block">
                        <h5>Описание</h5>
                        <div className="description">
                            <p>{productDetails.description}</p>
                        </div>
                        <div className="comments-block">
                            <h5>Оставить отзыв</h5>
                            <input
                                name="nickname"
                                onChange={handleInputsValue}
                                type="text"
                                placeholder="Name"
                                value={comment.nickname}

                            />
                            <textarea
                                className="area"
                                name="text"
                                onChange={handleInputsValue}
                                type="text"
                                placeholder="Comment"
                                value={comment.text}
                            >
                            </textarea>

                            <button onClick={handleClick}>Отправить</button>
                            <div className="comments__list">
                                {productDetails.comments.map(item => (
                                    <div key={item.id} className="comments-list-block col-10">
                                        <div className="user__icon">
                                            <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"></img>
                                        </div>
                                        <div className="comment__item">
                                            <li>{item.nickname}</li>
                                            <li>{item.text}</li>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (<Spinner />
                )}
        </div>
        </div>
    );
};

export default ProductDetails;