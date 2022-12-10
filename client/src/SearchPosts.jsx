import { useState, useEffect } from "react";
import Post from "./Post";

export default function SearchGames(props) {
    const [search, setSearch] = useState("");
    const [posts, setPosts] = useState([]);
    const [errorInput, setErrorInput] = useState("");
    const token = localStorage.getItem('token')
    const email = localStorage.getItem('email')
    const setUser = props.setUser
    useEffect(() => {
        if (email && token && posts) {
            fetch(`api/user/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/JSON',
                    'x-access-token': token
                },
                body: JSON.stringify({ email })
            })
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        return;
                    }
                    setUser(data.user)
                })
        }
    }, [email, token, posts, setUser])
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
                    'x-access-token': localStorage.getItem('token')
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
            localStorage.setItem('token', data.token);
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