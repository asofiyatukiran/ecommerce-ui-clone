import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from './Buttons/CartBtn'
import Like from './Buttons/Like'
import Profile from './Buttons/Profile'
import Search from './Buttons/Search'

const Header = () => {
    return (
        <>
      <ul className="nav justify-content-end ">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Client Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">FAQ</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">About</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown">Eng</NavLink>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><NavLink className="dropdown-item" to="/">BM</NavLink></li>
              <li><NavLink className="dropdown-item" to="/">DE</NavLink></li>
              <li><NavLink className="dropdown-item" to="/">UK</NavLink></li>
            </ul>
        </li>
    </ul>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid py-3">
          <NavLink className="navbar-brand mx-auto fw-bold" to="/">Blizoo.</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Search />
            
          </div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/man">Man's</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/woman">Woman's</NavLink>
              </li>
          </ul>
          <Like />
          <Profile />
          <CartBtn />
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid py-0">
            <ul className="navbar-nav me-auto mb-5">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Top</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Bottom</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Swim wear</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Watch</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Shoes</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Bag</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Accessories</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Sports</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Cosmetic</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Muslim wear</NavLink>
              </li>
          </ul>
        </div>
        </nav>
        </>
    )
}

export default Header
