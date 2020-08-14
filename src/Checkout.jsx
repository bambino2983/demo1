import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <img className="checkout__add" 
            src="https://firebasestorage.googleapis.com/v0/b/zeus-4da70.appspot.com/o/loencontre%2Ffreebannerad.jpg?alt=media&token=0aaeee70-e010-4a55-8c3d-b0e46a78c562" 
            alt=""
            />
            {basket?.length === 0 ? (
                <h2>Solicitudes Vacias</h2>
            ): (
                <div>
                     <h2>Lista de Solicitudes</h2>
                    {basket?.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                            image={item.image}  
                            price={item.price}
                            rating={item.rating}
                    /> 
                    ))}
                </div>
            )}
        </div>
    )
}

export default Checkout
