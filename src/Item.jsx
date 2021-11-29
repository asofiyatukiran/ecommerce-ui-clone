import React from 'react'
import { NavLink } from 'react-router-dom';
import DATA from './Data';
import './Components/Item.css'


const Item = () => {

    const cardItem = (item) => {
        return (
            <div class="card my-4 py-3" key={item.id} style={{width: "18rem"}}>
    
                <img src={item.img} class="card-img-top" alt={item.title}/>
                <h4 class=""><span class="badge badge-primary badge-pill badge-news">Sale</span></h4>
                    <div class="card-body">
                        <h5 class="card-title">{item.title}</h5>
                        <p className="lead">${item.price}</p>
                        <NavLink to={`/products/${item.id}`} class="btn btn-outline-primary">BUY</NavLink>
                    </div>
                </div>
                );
    }

                return (
                <div>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-4">
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-around">
                            {DATA.map(cardItem)}
                        </div>
                    </div>
                </div>
                )
}

export default Item
