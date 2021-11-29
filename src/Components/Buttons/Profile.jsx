import React from 'react'
import { NavLink } from 'react-router-dom'

const Profile = () => {
    return (
        <>
            <NavLink to="/" className="btn">
                <span className="fa fa-user me-1"></span>    
            </NavLink>   
        </>
    )
}

export default Profile
