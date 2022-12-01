import { useState } from "react";
import CreatePost from "./CreatePost";
import SearchGames from "./SearchGames";
import SearchPosts from "./SearchPosts";
import MyPost from "./MyPost";

export default function Menu(props) {

    const [menu, setMenu] = useState(0);
    return (
        <>
            <div className="menu">
                <div className="menu-container">
                    <button className={menu === 0 ? "menu-button menu-button-active" : "menu-button"} onClick={() => setMenu(0)}>Buscar jogos</button>
                    <button className={menu === 1 ? "menu-button menu-button-active" : "menu-button"} onClick={() => setMenu(1)}>Buscar publicações</button>
                    {props.user && props.user.role === 'admin' ? <><button className={menu === 2 ? "menu-button menu-button-active" : "menu-button"} onClick={() => setMenu(2)}>Criar publicações</button>
                        <button className={menu === 3 ? "menu-button menu-button-active" : "menu-button"} onClick={() => setMenu(3)}>Minhas publicações</button></> : <></>}
                </div>
            </div>
            {menu === 0 ? <SearchGames /> : menu === 1 ? <SearchPosts /> : menu === 2 ? <CreatePost /> : <MyPost />}
        </>
    )
}