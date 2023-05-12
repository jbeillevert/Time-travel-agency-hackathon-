import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiMoneyEuroCircleFill } from "react-icons/ri";

function SingleCard({ image, titre, tarif, id }) {
    return (
        <NavLink className="cards" to={`/destination/${id}`}>
            <div className="card-img-container">
                <img src={image} />
            </div>
            <div className="card-info-container">
                <h3 className='card-title'>{titre}</h3>
                <div className="achat">
                    <div className='single-card-infos'>
                        <p className="apartirde">À partir de</p>
                        <p className="tarif">{tarif}
                        <RiMoneyEuroCircleFill  className='iconPriceCard'/></p>
                    </div>
                    <button className="more-info-button">+</button>
                </div>
            </div>
        </NavLink>
    );
}

export default SingleCard;