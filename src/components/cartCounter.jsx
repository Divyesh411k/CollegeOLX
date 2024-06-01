import React from 'react'

export const CartCounter = () => {
    const no_of_items_in_cart = 10;

    return (
        <>
            <div className='relative'>Cart
                <div className='cart-counter'><p>{no_of_items_in_cart}</p> </div>
            </div>

        </>
    )
}
