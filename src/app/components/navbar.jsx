import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <ul>
            <li>
                <Link to="/">Главная</Link>
            </li>
            <li>
                <Link to="/card">Страница участника</Link>
            </li>
            <li>
                <Link to="/favourites">Избранные</Link>
            </li>
        </ul>
    )
}

export default NavBar