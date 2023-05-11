import React from 'react';
import { NavLink } from 'react-router-dom';

function SingleCard({image, titre, tarif, id}) {
    return (
        <li className="cards">
            <NavLink to={`/destination/${id}`}>
                <img src={image} />
                <h3>{titre}</h3>
                <p>À partir de</p>
                <p>{tarif}</p>
            </NavLink>
        </li>
    );
}

export default SingleCard;