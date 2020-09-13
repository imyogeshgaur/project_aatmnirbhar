import React from 'react'
import { NavLink } from 'react-router-dom';
import './Card.css'
const Card = (props) => {
    return (
        <>
            <div className="col-md-6 col-10 mx-auto">
                <div className="card" id={props.id}>
                    <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                        <NavLink to="" className={props.btnColor}>View Item</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;