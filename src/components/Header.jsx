import { NavLink } from "react-router-dom";
export const Header = () => {
    return (<header><nav> <NavLink to="/" end>
        Home
    </NavLink><NavLink to="/movies" end>
            Movies
        </NavLink></nav></header>)
}