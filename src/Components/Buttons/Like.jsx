import React from 'react'
import { NavLink } from 'react-router-dom'

const Like = () => {
    return (
        <>
            <NavLink to="/" className="btn">
                <span className="fa fa-heart me-1"></span> 
            </NavLink> 
        </>
    )
}

export default Like
