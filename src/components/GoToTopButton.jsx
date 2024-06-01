import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';

export const GoToTopButton = () => {

    const [Visible, setVisible] = useState(false)

    const listentoscroll = () => {
        const heightToShow = 250;
        const winScrolled = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScrolled > heightToShow) {
            setVisible(true)
        }
        else {
            setVisible(false)
        }

    }


    useEffect(() => {
        window.addEventListener("scroll", listentoscroll)
    }, [])

    const gototop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
    return (

        Visible && (
            <div >
                <button className='go-to-top-btn p-2.5 ' onClick={gototop}><FaArrowUp className='m-auto w-full h-full ' /></button>
            </div>
        )


    )
}
