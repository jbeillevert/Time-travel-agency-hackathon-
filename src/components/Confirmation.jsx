import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ImCross } from "react-icons/im";

const Confirmation = () => {

    const navigate = useNavigate();

    return (
        <div className="conf-container">
            <ImCross className="iconCross" onClick={() => navigate(-4)}/>
            <div className="confirmation">
                <h3 classname="conf-text">Votre commande a bien été prise en compte.
                    Nos équipes reviendront vers vous rapidement afin d'entamer le protocole de préparation.</h3>
            </div>
        </div>
    );
};

export default Confirmation;