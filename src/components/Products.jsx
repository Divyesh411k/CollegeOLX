import React from 'react'
import { ProductCards } from './ProductCards'

export const Products = () => {
    return (
        <>
            <h2 className='font-bold text-lg m-3 '>Latest Products</h2>
            <div className='flex flex-wrap w-full justify-around '>
                <ProductCards />
                <ProductCards />
                <ProductCards />
                <ProductCards />
                <ProductCards />
                <ProductCards />
                <ProductCards />
                <ProductCards />
                <ProductCards />
                <ProductCards />
                <ProductCards />
                <ProductCards />

            </div>
        </>
    )
}
