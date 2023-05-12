import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CardDetails from '../pages/CardDetails';
import AboutUs from '../pages/AboutUs';
import Warning from '../pages/Warning';
import ReservationForm from '../pages/ReservationForm';
import Confirmation from '../Confirmation';


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/time-machine" element={<AboutUs />} />
            <Route path="/destination/:id" element={<CardDetails />} />
            <Route path="/warning" element={<Warning />} />
            <Route path="/destination/:id/ReservationForm" element={<ReservationForm />} />
            <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
    );
};

export default Router;