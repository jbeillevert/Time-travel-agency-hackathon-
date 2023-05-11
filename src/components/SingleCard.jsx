import React from 'react';
import { NavLink } from 'react-router-dom';

function SingleCard({ image, titre, tarif, id }) {
    return (
        <li className="cards">
            {/* <NavLink to={`/destination/${id}`}> */}
                <div className="card-img-container">
                    <img src={image} />
                </div>
                <h3 className='card-title'>{titre}</h3>
                <div className="achat">
                    <div className='single-card-infos'>
                        <p className="apartirde">À partir de</p>
                        <p className="tarif">{tarif}</p>
                    </div>
                    <button>...</button>
                </div>

            {/* </NavLink> */}
        </li>
    );
}

export default SingleCard;