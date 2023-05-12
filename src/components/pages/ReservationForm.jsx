import React, { useEffect, useState } from 'react';
import { HiOutlineCalendar } from "react-icons/hi";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { createClient } from '@supabase/supabase-js';
import { useParams, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { ImCross } from "react-icons/im";


const ReservationForm = () => {
    const [initialPrice, setInitialPrice] = useState(0)
    const [totalPrice, setTotalPrice] = useState(initialPrice)
    const [nbAdultes, setNbAdultes] = useState(1)
    const [nbEnfants, setNbEnfants] = useState(0)
    const [nbBebes, setNbBebes] = useState(0)
    const [nbAnimaux, setNbAnimaux] = useState(0)
    const [nbVoyageursTotal, setNbVoyageursTotal] = useState(1)



    const [table, setTable] = useState([]);

    const { id } = useParams()

    const supabase = createClient(`https://umnptqfditgysgbpzoyx.supabase.co/`, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtbnB0cWZkaXRneXNnYnB6b3l4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM4MTA2MjUsImV4cCI6MTk5OTM4NjYyNX0.LExHLdYK2bAdq0ronsaNNl9VDAeMwhTw0SVzB735W5o");

    useEffect(() => {
        gettable()
    }, [id]);

    async function gettable() {
        const { data } = await supabase.from("jean").select().eq('id', id);
        setTable(data);
        setInitialPrice(data[0].tarif)

    }

    function handleClickAddAdult() {
        setNbAdultes(nbAdultes + 1)
        setNbVoyageursTotal(nbVoyageursTotal + 1)
    }

    function handleClickRemoveAdult() {
        if (nbAdultes >= 2) {
            setNbAdultes(nbAdultes - 1)
            setNbVoyageursTotal(nbVoyageursTotal - 1)
        }
    }

    function handleClickAddEnfant() {
        setNbEnfants(nbEnfants + 1)
        setNbVoyageursTotal(nbVoyageursTotal + 1)
    }

    function handleClickRemoveEnfant() {
        if (nbEnfants >= 1) {
            setNbEnfants(nbEnfants - 1)
            setNbVoyageursTotal(nbVoyageursTotal - 1)
        }
    }

    function handleClickAddBaby() {
        setNbBebes(nbBebes + 1)
        setNbVoyageursTotal(nbVoyageursTotal + 1)
    }

    function handleClickRemoveBaby() {
        if (nbBebes >= 1) {
            setNbBebes(nbBebes - 1)
            setNbVoyageursTotal(nbVoyageursTotal - 1)
        }
    }

    function handleClickAddAnimal() {
        setNbAnimaux(nbAnimaux + 1)
        setNbVoyageursTotal(nbVoyageursTotal + 1)
    }

    function handleClickRemoveAnimal() {
        if (nbAnimaux >= 1) {
            setNbAnimaux(nbAnimaux - 1)
            setNbVoyageursTotal(nbVoyageursTotal - 1)
        }
    }


    useEffect(() => {
        setTotalPrice(nbVoyageursTotal * initialPrice)

    }, [nbVoyageursTotal])

    const navigate = useNavigate();


    return (
        <div className='reservation-form'>
            <ImCross className="iconCross" onClick={() => navigate(-1)}/>
            <form className='form-rf'>
                <div className="content-container-rf">
                    <div className='left-part-reservation-form'>
                        <div className="block-container-rf">
                            <h2 className='h2-rf'>Informations client</h2>
                            <div className="content-form1">
                                <label htmlFor="prenom" className='label-rf'>Prénom</label>
                                <input type="text" className='input-rf' id="prenom" />
                                <label htmlFor="nom" className='label-rf'>Nom</label>
                                <input type="text" className='input-rf' id="nom" />
                                <label htmlFor="email" className='label-rf'>Email</label>
                                <input type="email" className='input-rf' id='email' />
                                <label htmlFor="phone" className='label-rf'>Téléphone</label>
                                <input type="tel" className='input-rf' id='phone' pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}" />
                            </div>
                        </div>
                        <div className="block-container-rf">
                            <h2 className='h2-rf'>Choisir un départ</h2>
                            <div className="dates-container">
                                <div className="dates-proposal-rf">
                                    <label className="custom-radio">
                                        <input type="radio" className="text-dates-proposal" name="date" />
                                        <HiOutlineCalendar className="icon-calendar" /> 25 Mai 2023
                                    </label>
                                    <label className="custom-radio">
                                        <input type="radio" className="text-dates-proposal" name="date" />
                                        <HiOutlineCalendar className="icon-calendar" /> 1 Juin 2023
                                    </label>
                                    <label className="custom-radio">
                                        <input type="radio" className="text-dates-proposal" name="date" />
                                        <HiOutlineCalendar className="icon-calendar" /> 10 Juin 2023
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right-part-reservation-form'>
                        {table.length > 0 && (<>
                            <div className="block-container-rf">
                                <div className="h2-rf">Votre commande</div>
                                <div className="card-command">
                                    <img src={table[0].image} className='img-command' alt="" />
                                    <div className="container-text-command">
                                        <h3 className="title-command">{table[0].titre}</h3>
                                        <p className='text-command' >{table[0].distance}</p>
                                    </div>
                                </div>
                                <h3 className='block-voyageurs'>Voyageurs</h3>
                                <div className="container-voyageurs">
                                    <div className="card-voyageur">
                                        <div className="wrapper-text-voyageur">
                                            <h4 className='type-voyageur'>Adultes</h4>
                                            <p className='text-voyageur'>13 ans et plus</p>
                                        </div>
                                        <div className="counter-voyageur">
                                            <AiOutlineMinusCircle className='icon-minus' onClick={handleClickRemoveAdult} />
                                            <p className='counter-text'>{nbAdultes}</p>
                                            <AiOutlinePlusCircle className='icon-plus' onClick={handleClickAddAdult} />
                                        </div>
                                    </div>
                                    <div className="card-voyageur">
                                        <div className="wrapper-text-voyageur">
                                            <h4 className='type-voyageur'>Enfants</h4>
                                            <p className='text-voyageur'>De 2 à 12 ans</p>
                                        </div>
                                        <div className="counter-voyageur">
                                            <AiOutlineMinusCircle className='icon-minus' onClick={handleClickRemoveEnfant} />
                                            <p className='counter-text'>{nbEnfants}</p>
                                            <AiOutlinePlusCircle className='icon-plus' onClick={handleClickAddEnfant} />
                                        </div>
                                    </div>
                                    <div className="card-voyageur">
                                        <div className="wrapper-text-voyageur">
                                            <h4 className='type-voyageur'>Bébés</h4>
                                            <p className='text-voyageur'>-de 2 ans</p>
                                        </div>
                                        <div className="counter-voyageur">
                                            <AiOutlineMinusCircle className='icon-minus' onClick={handleClickRemoveBaby} />
                                            <p className='counter-text'>{nbBebes}</p>
                                            <AiOutlinePlusCircle className='icon-plus' onClick={handleClickAddBaby} />
                                        </div>
                                    </div>
                                    <div className="card-voyageur">
                                        <div className="wrapper-text-voyageur">
                                            <h4 className='type-voyageur'>Animaux de compagnie</h4>
                                        </div>
                                        <div className="counter-voyageur">
                                            <AiOutlineMinusCircle className='icon-minus' onClick={handleClickRemoveAnimal} />
                                            <p className='counter-text'>{nbAnimaux}</p>
                                            <AiOutlinePlusCircle className='icon-plus' onClick={handleClickAddAnimal} />
                                        </div>
                                    </div>
                                </div>

                                <div className="test-container">
                                    <h3 className='taxes-price'>Nombre de voyageurs</h3>
                                    <h3 className='test-h3'>{nbVoyageursTotal}</h3>
                                </div>
                                <div className="test-container">
                                    <h3 className='taxes-price'>Prix de base</h3>
                                    <h3 className='test-h3'>{initialPrice} €</h3>
                                </div>

                                <div className="card-price">
                                    <div className="taxes-price">Total T.T.C</div>
                                    <div className="total-price">{totalPrice} €</div>
                                </div>
                                <NavLink to="/warning"> <button type="submit" className='button-reservation'>Réserver</button></NavLink>
                            </div>
                        </>)}
                    </div>

                </div>

            </form>

        </div>
    );
};

export default ReservationForm;