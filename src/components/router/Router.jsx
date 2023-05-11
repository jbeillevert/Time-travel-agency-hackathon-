import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CardDetails from '../pages/CardDetails';
import AboutUs from '../pages/AboutUs';
// import ReservationForm from '../pages/ReservationForm';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/time-machine" element={<AboutUs />} />
            <Route path="/destination/:id" element={<CardDetails />} />
            {/* <Route path="/destination/:id/ReservationForm" element={<ReservationForm />} /> */}
        </Routes>
    );
};

export default Router;