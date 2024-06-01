import React from 'react'
import { Products } from '../components/Products'
import SerachBar from '../components/Searchbar/SerachBar'


export const Home = () => {
    return (
        <div className='h-full'>
            <h1 className='font-bold text-xl m-2'>Welcome to DJLX, For the students, By the students.</h1>
            <SerachBar/>
            <Products />


        </div>
    )

}
