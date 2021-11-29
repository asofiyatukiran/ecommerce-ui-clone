import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartBtn = () => {

    const state = useSelector((state)=> state.addItem)

    return (

        <>
            <NavLink to="/cart" className="btn btn-primary">
                <span className="fa fa-shopping-bag me-1"></span> Cart ({state.length}) 
            </NavLink>   
        </>
    )
}

export default CartBtn
