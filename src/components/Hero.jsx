import React from 'react';
import { NavLink } from "react-router-dom";
function Hero() {

    return (
        <>
            <div className="hero">
                <div className="title_container">
                    <h1 className="hero_title">
                        Découvrez une nouvelle façon de
                        <span className="hero_title_span" > voyager.</span>
                    </h1>
                </div>

                <NavLink to="/time-machine" className="about-us">

                    <div className="link-about-us">Comment ça marche?</div>

                    </NavLink>
                </div>
        </>
    );
}

export default Hero
