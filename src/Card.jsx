import React from 'react'
import './Card.css'
import { useStateValue } from './StateProvider'


function Card({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p classname="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p>★</p>
                            ))
                    }
                </div>

            </div>

            <img src={image} alt="" />
            <button onClick={addToBasket}>Solicitar</button>
        </div>
    )
}

export default Card
