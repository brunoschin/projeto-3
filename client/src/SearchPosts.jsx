import { useState } from "react";
import Post from "./Post";

export default function SearchGames() {
    const token = localStorage.getItem('token')
    const [search, setSearch] = useState("");
    const [posts, setPosts] = useState([]);
    const [errorInput, setErrorInput] = useState("");
    const searchHandler = async () => {
        try {
            if (search.length < 3) {
                setErrorInput("Digite pelo menos 3 caracteres*");
                return;
            }
            const response = await fetch(`/api/post/${search}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token
                }
            })
            const data = await response.json();
            if (data.length === 0) {
                setErrorInput("Nenhum resultado encontrado*");
                return;
            }
            if (data.error) {
                throw data.error
            }
            setPosts(data.posts);
            return;
        }
        catch (err) {
            setErrorInput(err.startsWith('Error:') ? err.replace('Error:', '') : err);
            setPosts([]);

        }
        setPosts([]);
    }
    return (<>
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
            }} placeholder="Buscar publicações" />
            <button type="button" onClick={searchHandler}>BUSCAR</button>
        </div >
        <div className="resultsContainer">
            <p>Resultados</p>
        </div>
        <br />
        <div className="posts-container">
            {posts.length > 0 ? posts.map(post =>
                <Post key={post._id} {...post} />) : <></>}
        </div>
    </>)
}