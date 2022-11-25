import { useState } from "react";
import Thumb from "./Thumb";

const cheapSharkAPI = "https://www.cheapshark.com/api/1.0/";

export default function SearchPosts() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [errorInput, setErrorInput] = useState("");
    const searchHandler = async () => {
        if (search.length < 3) {
            setErrorInput("Digite pelo menos 3 caracteres*");
            return;
        }
        const response = await fetch(`${cheapSharkAPI}games?title=${search}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        if (data.length === 0) {
            setErrorInput("Nenhum resultado encontrado*");
            return;
        }
        setResults(data);
    }

    return <>
        <div className="searchContainer">
            {errorInput !== "" && <p className="error">{errorInput}</p>}
            <input type="text" value={search} onChange={e => {
                setSearch(e.target.value)
                if (e.target.value.length >= 3) {
                    setErrorInput("")
                }
            }} onKeyDown={() => {
                if (window.event.keyCode === 13) {
                    searchHandler();
                }
            }} placeholder="Buscar por jogos" />
            <button type="button" onClick={searchHandler}>BUSCAR</button>
        </div >
        <div className="resultsContainer">
            <p>Resultados</p>
            <div className="results">
                {results.length > 0 ? results.map((result, index) => {
                    return (
                        <Thumb key={index} {...result} />
                    )
                }) : <></>}
            </div>
        </div>
    </>
}