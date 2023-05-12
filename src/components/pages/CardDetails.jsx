import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { createClient } from "@supabase/supabase-js";
import ImageDetails from "../img/imagechine.jpg";

function CardDetails() {

  const [table, setTable] = useState({});

  const { id } = useParams()

  const supabase = createClient(`https://umnptqfditgysgbpzoyx.supabase.co/`, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtbnB0cWZkaXRneXNnYnB6b3l4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM4MTA2MjUsImV4cCI6MTk5OTM4NjYyNX0.LExHLdYK2bAdq0ronsaNNl9VDAeMwhTw0SVzB735W5o");

  useEffect(() => {
      gettable()
  }, [id]);

  async function gettable() {
      const { data } = await supabase.from("jean").select().eq('id', id);
      setTable(data);
      console.log(data)
  }


  return (
    <div className="container">
    {table.length > 0 && ( <>
      <div className="ImageCardDetails" key={id}>
        <img src={table[0].image} alt={`photo ${table[0].lieu}`} />
      </div>
    <div className="DescriptionCardDetails">
      <h1 className="title-details">{table[0].titre}</h1>
      <p className="description-details">
        {table[0].description}
      </p>
    </div>
    <div className="ButtonReservation">
      <h3 className="PriceCard">{table[0].lieu} : {table[0].siecle}</h3>
      <button className="button-details">Reserver</button>
      <h3 className="PriceCard">{table[0].tarif}</h3>
    </div>
    </>)}
  </div> 
    );
}

export default CardDetails;
