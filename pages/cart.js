import React from 'react'
import { useContext } from 'react';
import Store from '../utils/Store';



const CartBasket = () => {
    const { state, dispatch } = useContext(Store);

    return (
        <div>
            shopping card
        </div>
    )
}

export default CartBasket
