import React from 'react';
import { HiOutlineCalendar } from "react-icons/hi";



const ReservationForm = () => {
    return (
        <div className='reservation-form'>
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
                                    <label htmlFor="phone" className='label-rf'>Mobile</label>
                                    <input type="tel" className='input-rf' id='phone' pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}" />
                                </div>
                        </div>
                        <div className="block-container-rf">
                            <h2 className='h2-rf'>Dates départ</h2>
                            <div className="dates-container">
                                <div className="dates-proposal-rf">
                                    <label className="custom-radio">
                                        <input type="radio" className="text-dates-proposal" name="date1" />
                                        <HiOutlineCalendar className="icon-calendar" /> 25 Mai 2023
                                    </label>
                                    <label className="custom-radio">
                                        <input type="radio" className="text-dates-proposal" name="date2" />
                                        <HiOutlineCalendar className="icon-calendar" /> 1 Juin 2023
                                    </label>
                                    <label className="custom-radio">
                                        <input type="radio" className="text-dates-proposal" name="date3" />
                                        <HiOutlineCalendar className="icon-calendar" /> 10 Juin 2023
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right-part-reservation-form'></div>

                </div>

            </form>
        </div>
    );
};

export default ReservationForm;