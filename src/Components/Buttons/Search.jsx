import React from 'react'
import { NavLink } from 'react-router-dom'

const Search = () => {
    return (
        <>
            <NavLink to="/" className="btn">
                <span className="fa fa-search me-3"></span>
            </NavLink>
        </>
    )
}

export default Search
