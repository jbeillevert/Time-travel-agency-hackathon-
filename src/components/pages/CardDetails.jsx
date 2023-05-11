import React from "react";
import ImageDetails from "../img/imagechine.jpg";

function CardDetails() {
  return (
  <div className="container">
    <div className="ImageCardDetails">
      <img src={ImageDetails} alt="photo_monument_chine" />
    </div>
    <div className="DescriptionCardDetails">
      <h1 className="title-details">Dynastie Zhou de l'Est</h1>
      <p className="description-details">La dynastie des Zhou orientaux chinois traditionnel : 東周 ; chinois simplifié : 东周 ; pinyin : dōng zhōu, qui commence en -770 et se termine en -2561,2, ayant duré pendant la période des Printemps et des Automnes et pendant les Royaumes combattants. C'est une période réduite de la dynastie Zhou (-1045 — -256) qui fait suite à la période dite de la dynastie Zhou occidentale. Sa capitale était Luoyi (chinois : 洛邑 ; pinyin : luòyì ; litt. « ville ou district de Luo »), aujourd'hui, Luoyang. Son fondateur est Zhou Pingwang et la chute de la dynastie a lieu sous le règne de Zhou Nanwang.</p> 
    </div>
    <div className="ButtonReservation">
      <h3 className="PriceCard">Destination : Chine , année -770</h3>
      <button className="button-details">Reserver</button>
      <h3 className="PriceCard">80000 euros le transfert</h3>

    </div>
    
   

    
  </div>
   
  );
}

export default CardDetails;
