import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineWarning } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";
import { ImCross } from "react-icons/im";

function Warning() {
    const [showPopup, setShowPopup] = useState(false);

     const handleClick = (e) => {
        e.preventDefault();
        alert("Votre commande a bien été prise en compte. Nos équipes reviendront vers vous rapidement afin d'entamer le protocole de préparation.")
    }

    const popupClose = () => {
        setShowPopup(false);
    };
    const navigate = useNavigate();
    return (
        <> <div className="warning">
            <ImCross className="iconCross" onClick={() => navigate(-1)}/>
            <h1 className="warning-title"> <AiOutlineWarning id="icon" />  Avertissement sur le voyage temporel  <AiOutlineWarning id="icon" /></h1>

            <div className="disclaimer">

                <p>  AVERTISSEMENT : Le voyage temporel est une activité extrêmement dangereuse et imprévisible.</p>
                <p>L'entreprise XYZ décline toute responsabilité quant aux conséquences du voyage temporel, y compris, mais sans s'y limiter :</p>
                <ul className="warning-list">
                    <li> <RiErrorWarningLine /> Perte de données</li>
                    <li> <RiErrorWarningLine /> Dommages matériels</li>
                    <li> <RiErrorWarningLine /> Boucles temporelles</li>
                    <li> <RiErrorWarningLine /> Altération de l'histoire</li>
                    <li> <RiErrorWarningLine /> Rencontres avec des versions antérieures ou futures de soi-même</li>
                </ul>
                <p>En poursuivant le voyage temporel, vous reconnaissez que vous le faites entièrement à vos propres risques.</p>
            </div>

            <div className="disclaimer2">
                <h2 className="warning-instructions">Instructions de sécurité</h2>
                <p>Avant de procéder au voyage temporel, veuillez prendre en compte les éléments suivants :</p>
                <ol>
                    <li>Vérifiez que votre machine à voyager dans le temps est correctement calibrée.</li>
                    <li>Assurez-vous d'avoir des provisions suffisantes pour toute la durée du voyage.</li>
                    <li>Évitez les interférences avec les événements historiques importants.</li>
                    <li>Ne tentez pas d'altérer de manière significative le cours de l'histoire.</li>
                    <li>En cas d'urgence, utilisez le dispositif de retour immédiat.</li>
                </ol>
            </div >
            <div className="button">
                <NavLink to="/confirmation">
                    <button>J'accepte les conditions</button>
                </NavLink>
            </div>
        </div>
        </>
    )
}

export default Warning