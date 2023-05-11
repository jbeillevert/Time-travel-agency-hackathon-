import React, { useState, useEffect } from 'react';
import { createClient } from "@supabase/supabase-js";
import SingleCard from '../SingleCard';
import NavBar from '../NavBar';
import Hero from '../Hero';


function HomePage() {

    // const [data, setData] = useState([])
    const [search, setSearch] = useState("")

    const [table, setTable] = useState([]);

    const supabase = createClient("https://umnptqfditgysgbpzoyx.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtbnB0cWZkaXRneXNnYnB6b3l4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM4MTA2MjUsImV4cCI6MTk5OTM4NjYyNX0.LExHLdYK2bAdq0ronsaNNl9VDAeMwhTw0SVzB735W5o");

    useEffect(() => {
        gettable()
    }, []);

    async function gettable() {
        const { data } = await supabase.from("jean").select();
        setTable(data);
    }

    const handleSelector = (e) => {
        setSearch(e.target.value)
    }


    return (
        <main className="home-page">

            <NavBar />

            <Hero />
            <div className="select-container">
            <select className="page_select" value={search} onChange={handleSelector}>
                <option className="option" value="">Sélectionnez votre époque</option>
                {table.map((el) => {
                    return (
                        <option key={el.id} value={el.lieu}>{el.lieu}</option>
                    )
                })}
            </select>
            </div>
            <ul className="home-page_ul">
                {table
                    .filter((el) => search === "" || el.lieu === search)
                    .map((el) => {
                        return (
                            <SingleCard key={el.id} image={el.image} titre={el.titre} tarif={el.tarif} id={el.id} />
                        )
                    })}
            </ul>
        </main>
    );
}

export default HomePage;