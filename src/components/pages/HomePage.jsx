import React, { useState, useEffect } from 'react';


function HomePage() {

const [data, setData] = useState([])
const [search, setSearch] = useState("")

useEffect(() => {
    fetch("https://umnptqfditgysgbpzoyx.supabase.co/")
    .then((response) => response.json())
    .then((res) => setData(res))
    .catch((err) => console.error(err))   
   }, [])

   const handleSelector = (e) => {
    setSearch(e.target.value)
}
console.log("pouet !")

    return (
        <main className="home-page">
                <select className="home-page_select" value={search} onChange={handleSelector}>
                    <option className="option" value="">...</option>
                    {data.map((el) => {
                        return(
                            <option key={el.id} value={el.id}>{el.titre}</option>
                        )
                    })}
                </select>
                <ul className="home-page_ul">
                {data
                    .filter((el) => search === "" || el.titre === search)
                    .map((el) => {
                        return(
                        <SingleCard key={el.id} image={el.image} titre={el.titre} tarif={el.tarif} id={i.id} />
                        ) 
                    })}
                </ul>
            </main>
    );
}

export default HomePage;